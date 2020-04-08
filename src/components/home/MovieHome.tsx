import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

function MovieHome() {
  let imgUrl =
    'https://image.tmdb.org/t/p/original/pCUdYAaarKqY2AAUtV6xXYO8UGY.jpg';
  return (
    <HomeWrapper>
      <HomeImageBlock imgUrl={imgUrl}>
        <h4>무슨 영화를 볼지 고민이세요?</h4>
        <Button to="/list">시작하기</Button>
      </HomeImageBlock>
      <HomeImageBlock imgUrl={imgUrl}>
        <h4>무슨 영화를 볼지 고민이세요?</h4>
        <Button to="/list">시작하기</Button>
      </HomeImageBlock>
      <HomeImageBlock imgUrl={imgUrl}>
        <h4>무슨 영화를 볼지 고민이세요?</h4>
        <Button to="/list">시작하기</Button>
      </HomeImageBlock>
      <HomeImageBlock imgUrl={imgUrl}>
        <h4>무슨 영화를 볼지 고민이세요?</h4>
        <Button to="/list">시작하기</Button>
      </HomeImageBlock>
      <HomeImageBlock imgUrl={imgUrl}>
        <h4>무슨 영화를 볼지 고민이세요?</h4>
        <Button to="/list">시작하기</Button>
      </HomeImageBlock>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4 {
    font-size: 3rem;
  }
`;
