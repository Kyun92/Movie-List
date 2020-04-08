import { combineReducers } from 'redux';
import home from './home';

import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  home,
});

// export function* rootSaga() {
//   yield all([]);
// }

export default rootReducer;
