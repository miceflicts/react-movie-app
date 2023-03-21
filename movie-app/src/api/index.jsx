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
      mediaArray.push({name: info.results[i][mediaName], poster: info.results[i][getPoster], type: info.results[i].media_type, id: info.results[i].id});
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
    let mediaArray = [];
    for (let i = 0; i < info.results.length; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";
      let getPoster = info.results[i].poster_path === null ? "backdrop_path" : "poster_path";
      if (type === "person"){
        getPoster = "profile_path";
      }

      if (info.results[i][mediaName] !== null && info.results[i][getPoster] !== null) {
        mediaArray.push({name: info.results[i][mediaName], poster: info.results[i][getPoster], id: info.results[i].id})
      }
    }
    onSearch(mediaArray);
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

function CarouselRecomendation({onFetch, type, route}){

  useEffect(() => {
    const fetchRecomendations = () => {
      fetch(`https://api.themoviedb.org/3/${type}/${route}?api_key=${api_key}&page=1`)
        .then(response => response.json())
        .then(data => filterInfo(data))
        .catch(error => console.error(error));
    };
    

    fetchRecomendations();
  }, [])
  
  
  const filterInfo = (info) => {
    console.log(info)
    let mediaArray = [];
    let mediaLenght = 10;
    for (let i = 0; i < mediaLenght; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";
      mediaArray.push({name: info.results[i][mediaName], id: info.results[i].id, overview: info.results[i].overview, vote: info.results[i].vote_average, genre_id: info.results[i].genre_ids , backdrop: info.results[i].backdrop_path, poster: info.results[i].poster_path, type: info.results[i].media_type})
    };
    onFetch(mediaArray);
  }
}

export default GetRecomended;
export { SearchMedia, CarouselRecomendation };
