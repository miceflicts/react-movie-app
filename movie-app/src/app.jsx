import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/home'
import Movie from "./pages/movie";
import Header from "./layouts/header";

function App() {
  return (
    <>
      <Header></Header>
      <Router>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/movie" element={<Movie></Movie>}></Route>
          </Routes>
      </Router> 
    </>
  )
}

export default App