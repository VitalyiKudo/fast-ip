/* eslint-disable max-statements-per-line */
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
export const logoutUserAction = createAction<string>(`${sliceName}/LOGOUT_USER_ASYNC`);

// Types
import { User } from '../types';
import { clearCookie, getCookie } from '../../../tools/utils/cookieHandler';

// Saga
const logoutUser = (callAction: ReturnType<typeof logoutUserAction>) => makeRequest<User>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/logout`, {
            method:  'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization:  `Bearer ${getCookie('access_token')}`,
            }),
        }),
    },
    succes: function* () {
        yield clearCookie();
    },
    error: function* (errorData) {
        yield console.log(errorData);
    },
});

// Watcher
export function* watchLogoutUser(): SagaIterator {
    yield takeLatest(logoutUserAction.type, logoutUser);
}
