import React, { useEffect } from 'react';
import { homeRequest } from '../module/home';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../module';
import MovieHome from '../components/home/MovieHome';

function HomeContainer() {
  const dispatch = useDispatch();
  const home = useSelector((state: RootReducerType) => state.home);
  const { loading, imgUrlList, error } = home;

  useEffect(() => {
    dispatch(homeRequest());
  }, [dispatch]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>error</div>;

  return <MovieHome imgUrlList={imgUrlList} />;
}
export default HomeContainer;
