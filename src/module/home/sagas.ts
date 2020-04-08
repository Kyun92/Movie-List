import { put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { homeSuccess, homeFailure, HOME_REQUEST } from './actions';

const API_KEY = 'b6cf942411531af0d1635061b75f82a6';

function* getHome() {
  const page = Math.floor(Math.random() * 5) + 1;
  const res: AxiosResponse = yield call(() =>
    axios.get(
      `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ko-Kr&page=${page}&include_adult=true`,
    ),
  );
  try {
    yield put(homeSuccess(res.data));
  } catch (e) {
    yield put(homeFailure(e));
  }
}

export function* homeSaga() {
  yield takeEvery(HOME_REQUEST, getHome);
}
