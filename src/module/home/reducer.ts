import {
  HomeActionsType,
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAILURE,
} from './actions';
import { AxiosError } from 'axios';
import { randomImgExtraction } from '../../lib/randomImg';

type HomeState = {
  loading: boolean;
  imgUrlList: ImgUrl[] | null;
  error: AxiosError | null;
};
type ImgUrl = {
  id: number;
  imgUrl: string;
  title: string;
};

const initialState: HomeState = {
  loading: false,
  imgUrlList: null,
  error: null,
};

export default function home(
  state: HomeState = initialState,
  action: HomeActionsType,
): HomeState {
  switch (action.type) {
    case HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        imgUrlList: randomImgExtraction(action.payload),
      };
    case HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
