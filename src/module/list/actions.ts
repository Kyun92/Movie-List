import { AxiosError } from 'axios';
import { MoviesType } from '../MovieType';

export const LIST_REQUEST = 'list/LIST_REQUEST' as const;
export const LIST_SUCCESS = 'list/LIST_SUCCESS' as const;
export const LIST_FAILURE = 'list/LIST_FAILURE' as const;

export const listRequest = () => ({ type: LIST_REQUEST });
export const listSuccess = (movies: MoviesType) => ({
  type: LIST_SUCCESS,
  payload: movies,
});
export const listFailure = (error: AxiosError) => ({
  type: LIST_FAILURE,
  payload: error,
});

export type ListActionsType =
  | ReturnType<typeof listRequest>
  | ReturnType<typeof listSuccess>
  | ReturnType<typeof listFailure>;
