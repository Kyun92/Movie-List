import React from 'react';
import { Route } from 'react-router-dom';
import MovieList from './components/list/MovieList';
import MovieDetail from './components/MovieDetail';
import HomeContainer from './container/HomeContainer';

function App() {
  return (
    <>
      <Route path="/" component={HomeContainer} exact />
      <Route path="/list" component={MovieList} exact />
      <Route path="/movie/:id" component={MovieDetail} exact />
    </>
  );
}

export default App;
