import React from 'react';
import { Route } from 'react-router-dom';
import MovieHome from './components/home/MovieHome';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <>
      <Route path="/" component={MovieHome} exact />
      <Route path="/list" component={MovieList} exact />
      <Route path="/movie/:id" component={MovieDetail} exact />
    </>
  );
}

export default App;
