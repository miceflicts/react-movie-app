import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Movie from "./pages/movie";
import Header from "./layouts/header";
import TvShow from './pages/tv';

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/tv' element={<TvShow/>} />
      </Routes>
    </>
  );
}

export default App