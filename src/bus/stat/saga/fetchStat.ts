// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';


// Slice
import { statActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const fetchStatAction = createAction<number>(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { Stat } from '../types';

// Saga
const fetchStat = (callAction: ReturnType<typeof fetchStatAction>) => makeRequest<Stat>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/views`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(statActions.setStat(result));
    },
});

// Watcher
export function* watchFetchStat(): SagaIterator {
    yield takeLatest(fetchStatAction.type, fetchStat);
}
