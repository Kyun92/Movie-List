import { AxiosError } from 'axios';
import { ListActionsType } from './actions';

type ListState = {};

const initialState: ListState = {};

export default function list(
  state: ListState = initialState,
  action: ListActionsType,
): ListState {
  switch (action.type) {
    default:
      return state;
  }
}
