import React, { useEffect } from 'react';

const api_key = "66bb4395550c25d9a321ac6f8024d4e6";

// name: tv
// title: movie

function GetRecomended({ type, onMediaName }) {

  const filterInfo = (info) => {
    console.log(info);
    let mediaArray = [];
    for (let i = 0; i < info.results.length; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";
      let getPoster = info.results[i].poster_path === null ? "backdrop_path" : "poster_path";
      mediaArray.push({name: info.results[i][mediaName], poster: info.results[i][getPoster]});
    }
    onMediaName(mediaArray);
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

export default GetRecomended;
