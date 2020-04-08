import { MoviesType, MovieType } from '../module/MovieType';

export const randomImgExtraction = (movies: MoviesType) => {
  const { results } = movies;
  const randomList: number[] = randomNum();

  let data = results
    .map((movie: MovieType, index: number) => {
      return {
        id: movie.id,
        imgUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        title: movie.title,
      };
    })
    .filter((item, index) => randomList.includes(index));
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
