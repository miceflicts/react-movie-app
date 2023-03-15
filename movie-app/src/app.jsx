import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home'
import Movie from "./pages/movie";
import Header from "./layouts/header";
import TvShow from './pages/tv';
import SearchPage from './pages/search';
import MovieDetails from './pages/movieDetails';
import TvShowDetails from './pages/tvDetails';

function App() {

  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie' element={<Movie/>} />
          <Route path='/movie/:id' element={<MovieDetails/>} />
          <Route path='/tv' element={<TvShow/>} />
          <Route path='/tv/:id' element={<TvShowDetails/>} />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
    </>
  );
}

export default App