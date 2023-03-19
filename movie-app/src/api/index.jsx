import React, { useEffect } from 'react';

const api_key = "66bb4395550c25d9a321ac6f8024d4e6";

// name: tv
// title: movie

function GetRecomended({ type, onMediaChange }) {

  const filterInfo = (info) => {
    let mediaArray = [];
    for (let i = 0; i < info.results.length; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";
      let getPoster = info.results[i].poster_path === null ? "backdrop_path" : "poster_path";
      mediaArray.push({name: info.results[i][mediaName], poster: info.results[i][getPoster]});
    }
    onMediaChange(mediaArray);
  };

  useEffect(() => {
    const fetchInformation = () => {
      fetch(`https://api.themoviedb.org/3${type}?api_key=${api_key}`)
        .then(response => response.json())
        .then(data => filterInfo(data))
        .catch(error => console.error(error));
      }

    fetchInformation();
  }, [type]);
};

function SearchMedia({type, query, onSearch}) {

  const handleFetch = (info) =>{
    let mediarray = [];
    for (let i = 0; i < info.results.length; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";
      let getPoster = info.results[i].poster_path === null ? "backdrop_path" : "poster_path";
      if (type === "person"){
        getPoster = "profile_path";
      }

      if (info.results[i][mediaName] !== null && info.results[i][getPoster] !== null) {
        mediarray.push({name: info.results[i][mediaName], poster: info.results[i][getPoster]})
      }
    }
    onSearch(mediarray);
  }

  useEffect(() => {
    const fetchSearchOutputs = () => {
      fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => handleFetch(data))
        .catch(error => console.error(error));
      };
    
    fetchSearchOutputs();
  
  }, [type, query])

  };

export default GetRecomended;
export { SearchMedia };
