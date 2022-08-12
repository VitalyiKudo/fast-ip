// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchViewsAction, watchFetchViews } from './fetchViews';

export const useViewsSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchViews: (key: string | undefined) => void dispatch(fetchViewsAction(key)),
    };
};

export function* watchViews(): SagaIterator {
    yield all([ call(watchFetchViews) ]);
}
