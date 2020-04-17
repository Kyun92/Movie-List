import { MoviesType, MovieType } from '../module/MovieType';

export const randomImgExtraction = (movies: MoviesType) => {
  const { results } = movies;
  const randomList: number[] = randomNum();

  const homeTitle = [
    '무슨 영화를 볼지 고민이세요?',
    '밤을 채워줄 영화를 찾으시나요?',
    '같이 영화를 찾아볼까요?',
  ];

  let data = results
    .map((movie: MovieType) => {
      return {
        id: movie.id,
        imgUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        title: movie.title,
      };
    })
    .filter((item, index) => randomList.includes(index))
    .map((movie, index: number) => {
      return {
        ...movie,
        homeTitle: homeTitle[index],
      };
    });
  return data;
};

function randomNum(): number[] {
  const nums: number[] = [];
  function makeNum() {
    if (nums.length < 3) {
      let n = Math.floor(Math.random() * 20) + 1;
      if (notSame(n)) {
        nums.push(n);
      }
      makeNum();
    }
    function notSame(n: number): boolean {
      return nums.every((e) => n !== e);
    }
  }
  makeNum();
  return nums;
}
