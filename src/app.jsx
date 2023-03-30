import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home'
import Movie from "./pages/movie";
import Header from "./layouts/header";
import TvShow from './pages/tv';
import SearchPage from './pages/search';
import MovieDetails from './pages/movieDetails';
import TvShowDetails from './pages/tvDetails';
import Person from './pages/person';

function App() {
  const language =  navigator.language || navigator.userLanguage; 
  const region = language.split("-")[1];

  return (
    <>
      <Header language={language}></Header>
        <Routes>
          <Route path='/react-movie-app/' element={<Home language={language} region={region}/>} />
          <Route path='/react-movie-app/movie' element={<Movie language={language} region={region}/>} />
          <Route path='/react-movie-app/movie/:id' element={<MovieDetails language={language} region={region}/>} />
          <Route path='/react-movie-app/tv' element={<TvShow language={language} region={region}/>} />
          <Route path='/react-movie-app/tv/:id' element={<TvShowDetails language={language} region={region}/>} />
          <Route path="/react-movie-app/search" element={<SearchPage language={language} region={region}/>} />
          <Route path="/react-movie-app/person/:id" element={<Person language={language} region={region}/>} />
        </Routes>
    </>
  );
}

export default App