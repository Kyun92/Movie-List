import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import { homeRequest } from '../module/home';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../module';

function MovieHome() {
  const dispatch = useDispatch();
  const home = useSelector((state: RootReducerType) => state.home);
  const { loading, imgUrlList, error } = home;
  useEffect(() => {
    dispatch(homeRequest());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div>Loading..</div>;

  return (
    <HomeWrapper>
      {imgUrlList?.map((moive) => (
        <HomeImageBlock key={moive.id} imgUrl={moive.imgUrl}>
          <h4>무슨 영화를 볼지 고민이세요?</h4>
          <Button to="/list">시작하기</Button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4 {
    font-size: 5rem;
  }
`;
