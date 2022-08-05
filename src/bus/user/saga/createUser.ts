// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const createUserAction = createAction<type.User>(`${sliceName}/CREATE_USER_ASYNC`);

// Types
import * as type from '../types';

// Saga
const createUser = (callAction: ReturnType<typeof createUserAction>) => makeRequest<type.User>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: callAction.payload.userName,
                key:      callAction.payload.key,
            }),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(userActions.setUser(result));
    },
});

// Watcher
export function* watchCreateUser(): SagaIterator {
    yield takeLatest(createUserAction.type, createUser);
}
