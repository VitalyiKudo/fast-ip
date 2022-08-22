/* eslint-disable max-statements-per-line */
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
export const fetchUserAction = createAction<any>(`${sliceName}/FETCH_USER_ASYNC`);

// Types
import { User } from '../types';
import { getCookie } from '../../../tools/utils/cookieHandler';

// Saga
const fetchUser = (callAction: ReturnType<typeof fetchUserAction>) => makeRequest<User>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/profile`, {
            method:  'GET',
            headers: new Headers({
                Authorization: `Bearer ${getCookie('access_token')}`,
            }),
        }),
    },
    succes: function* (result) {
        yield put(userActions.setUser(result));
    },
    error: function* () {
        yield put(userActions.setUser({
            error: 'fetchError',
        }));
    },
});

// Watcher
export function* watchFetchUser(): SagaIterator {
    yield takeLatest(fetchUserAction.type, fetchUser);
}
