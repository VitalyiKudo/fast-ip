// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const authUserAction = createAction<types.AuthUser>(`${sliceName}/AUTH_USER_ASYNC`);

// Types
import * as types from '../types';
import { setCookie } from '../../../tools/utils/cookieHandler';

// Saga
const authUser = (callAction: ReturnType<typeof authUserAction>) => makeRequest<any>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/login`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: callAction.payload.username,
                password: callAction.payload.password,
            }),
        }),
    },
    succes: function* (result) {
        yield setCookie('access_token', result.access_token);
        yield setCookie('refresh_token', result.refresh_token);
    },
});

// Watcher
export function* watchAuthUser(): SagaIterator {
    yield takeLatest(authUserAction.type, authUser);
}
