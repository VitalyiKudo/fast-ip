/* eslint-disable max-len */
// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

//Types
import * as types from '../types';

// Watchers & Actions
import { fetchUserAction, watchFetchUser } from './fetchUser';
import { createUserAction, watchCreateUser } from './createUser';
import { authUserAction, watchAuthUser } from './authUser';
import { logoutUserAction, watchLogoutUser } from './logoutUser';
import { refreshUserAction, watchRefreshUser } from './refreshUser';

export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        createUser: (user: types.CreateUser) => {
            dispatch(createUserAction(user));
            fetchUserAction(1);
        },
        authUser: (user: types.AuthUser) => {
            dispatch(authUserAction(user));
        },
        fetchUser: () => {
            dispatch(fetchUserAction(1));
        },
        refreshUser: () => dispatch(refreshUserAction(1)),
        logoutUser:  (username: string) => dispatch(logoutUserAction(username)),
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchFetchUser), call(watchCreateUser), call(watchAuthUser), call(watchLogoutUser), call(watchRefreshUser) ]);
}
