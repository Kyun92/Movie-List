import { put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { LIST_REQUEST } from './actions';

function* getList() {}

export function* listSaga() {
  yield takeEvery(LIST_REQUEST, getList);
}
