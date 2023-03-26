import React, { useEffect } from 'react';
import { api_key } from '../../config';

// name: tv
// title: movie

function GetRecomended({ type, page, language, region, onMediaChange }) {

  const filterInfo = (info) => {
    let mediaArray = [];
    for (let i = 0; i < info.results.length; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";
      let getPoster = info.results[i].poster_path === null ? "backdrop_path" : "poster_path";

      if (info.results[i][mediaName] !== null && info.results[i][getPoster] !== null) {
        mediaArray.push({name: info.results[i][mediaName], poster: info.results[i][getPoster], type: info.results[i].media_type, id: info.results[i].id});
      }

    }
    onMediaChange(mediaArray);
  };

  useEffect(() => {
    const fetchInformation = () => {
      fetch(`https://api.themoviedb.org/3${type}?api_key=${api_key}&${language}&${page}&${region}`)
        .then(response => response.json())
        .then(data => filterInfo(data))
        .catch(error => console.error(error));
      }

    fetchInformation();
  }, [type]);
};

function SearchMedia({type, query, language, onSearch}) {

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
      fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${api_key}&language=${language}&page=1&query=${query}&include_adult=false`)
        .then(response => response.json())
        .then(data => handleFetch(data))
        .catch(error => console.error(error));
      };
    
    fetchSearchOutputs();
  
  }, [type, query])

};

function CarouselRecomendation({onFetch, type, page, route, language, region}){

  useEffect(() => {
    const fetchRecomendations = () => {
      fetch(`https://api.themoviedb.org/3/${type}/${route}?api_key=${api_key}&${language}&${page}&${region}`)
        .then(response => response.json())
        .then(data => filterInfo(data))
        .catch(error => console.error(error));
    };
    

    fetchRecomendations();
  }, [])
  
  
  const filterInfo = (info) => {
    let mediaArray = [];
    let mediaLength = 10;
    for (let i = 0; i < mediaLength; i++){
      let mediaName = info.results[i].name === undefined ? "title" : "name";

      if (info.results[i][mediaName] !== null && info.results[i].poster_path !== null){
        mediaArray.push({name: info.results[i][mediaName], id: info.results[i].id, overview: info.results[i].overview, vote: info.results[i].vote_average, genre_id: info.results[i].genre_ids , backdrop: info.results[i].backdrop_path, poster: info.results[i].poster_path, type: info.results[i].media_type})
      }
    }
    onFetch(mediaArray);
  };

};


function GetPersonInfo({onFetch, onWorksFetch, personId, language}){
  useEffect(() => {
    const fetchPersonInfo = () => {
      fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${api_key}&language=${language}`)
        .then(response => response.json())
        .then(data => filterInfo(data))
        .catch(error => console.error(error));
    };
    const fetchPersonWorks = () => {
      fetch(`https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${api_key}&language=${language}`)
        .then(response => response.json())
        .then(data => filterWorks(data))
        .catch(error => console.error(error));
    };

    
    fetchPersonInfo();
    fetchPersonWorks();
  }, [])

  const filterInfo = (info) => {
    let mediaArray = [];
    mediaArray.push({name: info.name, birthDay: info.birthday, deathDay: info.deathDay, biography: info.biography, image: info.profile_path})
    onFetch(mediaArray);
  }

  const filterWorks = (info) => {
    let worksArray = [];
    let mediaLength = 10;
    for (let i = 0; i < mediaLength; i++){
      let mediaName = info.cast[i].title === undefined ? "name" : "title";

      if (info.cast[i].poster_path !== null){
        worksArray.push({name: info.cast[i][mediaName], poster: info.cast[i].poster_path, vote: info.cast[i].vote_average, date: info.cast[i].release_date, id: info.cast[i].id, type: info.cast[i].media_type});
      }
      else {
        mediaLength++;
      }
    }
    onWorksFetch(worksArray);
  }
}

function GetMediasDetails({type, id, language, onFetch}){
    useEffect(() => {
      const fetchMediaGeneralDetails = () => {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=${language}`)
          .then(response => response.json());
      };
      const fetchMediaCredits = () => {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api_key}&language=${language}`)
          .then(response => response.json());
      };
      const fetchMediaImages = () => {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${api_key}`)
          .then(response => response.json());
      };
      const fetchMediaVideos = () => {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${api_key}&language=${language}`)
          .then(response => response.json());
      };
      const fetchMediaRecomendations = () => {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${api_key}&language=${language}`)
          .then(response => response.json());
      };

      Promise.all([
        fetchMediaGeneralDetails(),
        fetchMediaCredits(),
        fetchMediaImages(),
        fetchMediaVideos(),
        fetchMediaRecomendations(),
      ])
      .then(([generalData, credits, images, videos, recommendations, reviews]) => {
        filterInfo(generalData, credits, images, videos, recommendations, reviews);
      })
      .catch(error => console.error(error));
    }, []);
    
    const filterInfo = (generalData, credits, images, videos, recommendations) => {
      let mediaArray = [];
      let mediaName = generalData.name === undefined ? "title" : "name";
      mediaArray.push(
        {name: generalData[mediaName], tagline: generalData.tagline, overview: generalData.overview, first_air_date: generalData.first_air_date, genres: generalData.genres, vote_average: generalData.vote_average, backdrop_path: generalData.backdrop_path, poster_path: generalData.poster_path, id: generalData.id},
        {cast: credits.cast},
        {mediaBackdrops: images.backdrops.slice(0,20), mediaPosters: images.posters.slice(0,20)},
        {videos: videos.results.slice(0,10)},
        {recommendations: recommendations.results.slice(0,20)});
      onFetch(mediaArray);
    };
}

export default GetRecomended;
export { SearchMedia, CarouselRecomendation, GetPersonInfo, GetMediasDetails };
