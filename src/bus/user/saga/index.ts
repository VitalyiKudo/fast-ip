// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

//Types
import * as types from '../types';

// Watchers & Actions
import { fetchUserAction, watchFetchUser } from './fetchUser';
import { createUserAction, watchCreateUser } from './createUser';

export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        createUser: (user: types.User) => void dispatch(createUserAction(user)),
        fetchUser:  () => void dispatch(fetchUserAction(1)),
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchFetchUser), call(watchCreateUser) ]);
}
