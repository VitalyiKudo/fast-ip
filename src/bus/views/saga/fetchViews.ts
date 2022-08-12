// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { viewsActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const fetchViewsAction = createAction<string | undefined>(`${sliceName}/FETCH_VIEWS_ASYNC`);

// Types
import { Views } from '../types';

// Saga
const fetchViews = (callAction: ReturnType<typeof fetchViewsAction>) => makeRequest<Views>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/users/${callAction.payload}/views`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(viewsActions.setViews(result));
    },
});

// Watcher
export function* watchFetchViews(): SagaIterator {
    yield takeLatest(fetchViewsAction.type, fetchViews);
}
