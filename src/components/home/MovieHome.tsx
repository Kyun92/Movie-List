import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { ImgUrl } from '../../module/home/reducer';

type HomePropsType = {
  imgUrlList: ImgUrl[] | null;
};

function MovieHome({ imgUrlList }: HomePropsType) {
  return (
    <HomeWrapper>
      {imgUrlList?.map((movie) => (
        <HomeImageBlock key={movie.id} imgUrl={movie.imgUrl}>
          <div className="home-title">
            <h4>{movie.homeTitle}</h4>
            <Button to="/list">시작하기</Button>
          </div>
        </HomeImageBlock>
      ))}
    </HomeWrapper>
  );
}

export default MovieHome;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const HomeImageBlock = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-color: black;
  background-position: center;
  background-size: cover;
  color: #fff;

  h4 {
    font-size: 5rem;
  }
  .home-title {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
