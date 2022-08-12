// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';
import { setCookie } from '../../../tools/utils/cookieHandler';

// Action
export const createUserAction = createAction<any>(`${sliceName}/CREATE_USER_ASYNC`);

// Types
// import * as type from '../types';

// Saga
const createUser = (callAction: ReturnType<typeof createUserAction>) => makeRequest<any>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: callAction.payload.username,
                password: callAction.payload.password,
                key:      callAction.payload.key,
            }),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(userActions.setUser({
            username: callAction.payload.username,
            key:      callAction.payload.key,
        }));
        yield setCookie('access_token', result.access_token);
        yield setCookie('refresh_token', result.refresh_token);
    },
});

// Watcher
export function* watchCreateUser(): SagaIterator {
    yield takeLatest(createUserAction.type, createUser);
}
