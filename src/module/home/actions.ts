import { AxiosError } from 'axios';
import { MoviesType } from '../MovieType';

export const HOME_REQUEST = 'home/HOME_REQUEST' as const;
export const HOME_SUCCESS = 'home/HOME_SUCCESS' as const;
export const HOME_FAILURE = 'home/HOME_FAILURE' as const;

export const homeRequest = () => ({ type: HOME_REQUEST });
export const homeSuccess = (movies: MoviesType) => ({
  type: HOME_SUCCESS,
  payload: movies,
});
export const homeFailure = (error: AxiosError) => ({
  type: HOME_FAILURE,
  payload: error,
});

export type HomeActionsType =
  | ReturnType<typeof homeRequest>
  | ReturnType<typeof homeSuccess>
  | ReturnType<typeof homeFailure>;
