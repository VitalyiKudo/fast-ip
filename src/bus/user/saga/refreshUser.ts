// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';
import { getCookie, setCookie } from '../../../tools/utils/cookieHandler';

// Action
export const refreshUserAction = createAction<any>(`${sliceName}/REFRESH_USER_ASYNC`);

// Types
// import * as type from '../types';

// Saga
const refreshUser = (callAction: ReturnType<typeof refreshUserAction>) => makeRequest<any>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/refresh`, {
            method:  'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization:  `Bearer ${getCookie('refresh_token')}`,
            }),
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield setCookie('access_token', result.access_token);
    },
});

// Watcher
export function* watchRefreshUser(): SagaIterator {
    yield takeLatest(refreshUserAction.type, refreshUser);
}
