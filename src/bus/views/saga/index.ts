// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchViewsAction, watchFetchViews } from './fetchViews';

export const useViewsSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchViews: () => void dispatch(fetchViewsAction(1)),
    };
};

export function* watchViews(): SagaIterator {
    yield all([ call(watchFetchViews) ]);
}
