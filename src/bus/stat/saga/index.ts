// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchStatAction, watchFetchStat } from './fetchStat';

export const useStatSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchStat: () => void dispatch(fetchStatAction(1)),
    };
};

export function* watchStat(): SagaIterator {
    yield all([ call(watchFetchStat) ]);
}
