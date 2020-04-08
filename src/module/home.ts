const HOME_REQUEST = 'home/HOME_REQUEST' as const;
const HOME_SUCCESS = 'home/HOME_SUCCESS' as const;
const HOME_FAULURE = 'home/HOME_FAILURE' as const;
const HOME_IMAGES_INIT = 'home/HOME_IMAGES_INIT' as const;

export const homeRequest = () => ({ type: HOME_REQUEST });
export const homeImagesInit = (movies: []) => ({
  type: HOME_IMAGES_INIT,
  payload: movies,
});

type HomeAction =
  | ReturnType<typeof homeRequest>
  | ReturnType<typeof homeImagesInit>;

type Img = {
  id: number;
  imgUrl: string;
};
type HomeState = {
  images: Img[];
};

const initalState: HomeState = {
  images: [],
};

function home(state: HomeState = initalState, action: HomeAction) {
  switch (action.type) {
    case HOME_IMAGES_INIT: {
      return { images: action.payload.map((img) => img) };
    }
    default: {
      return state;
    }
  }
}

export default home;
