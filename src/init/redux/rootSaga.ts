// Core
import { all } from 'redux-saga/effects';
import { watchViews } from '../../bus/views/saga';

// Tools
// import { watch__entityName__ } from '../../bus/__entityName__/saga';

export function* rootSaga() {
    yield all([ watchViews() ]);
}
