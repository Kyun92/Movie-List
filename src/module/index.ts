import { combineReducers } from 'redux';
import home, { homeSaga } from './home';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  home,
});

export function* rootSaga() {
  yield all([homeSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
