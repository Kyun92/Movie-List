import { combineReducers } from 'redux';
import home, { homeSaga } from './home';
import list, { listSaga } from './list';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  home,
  list,
});

export function* rootSaga() {
  yield all([homeSaga(), listSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
