// Core
import { all } from 'redux-saga/effects';

// Tools
// import { watch__entityName__ } from '../../bus/__entityName__/saga';
import { watchStat } from '../../bus/stat/saga';

export function* rootSaga() {
    yield all([ watchStat() ]);
}
