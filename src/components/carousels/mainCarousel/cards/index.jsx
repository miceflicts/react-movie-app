import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import carouselData from "../../../../languages/carouselData.json"
import genresData from "../../../../languages/genresData.json"
import 'react-circular-progressbar/dist/styles.css';
import "./style.css"


function CarouselCards({name, backdrop, poster, genres, overview, vote, id, type, language, screenWidth}) {
  const [cardType, setCardType] = useState({poster: backdrop, overview: overview})
  
  const movieGenres = genresData.Languages[language][0]["Movie genres"];
  const tvGenres = genresData.Languages[language][0]["Tv genres"];
  const genreType = type === "movie" ? movieGenres : tvGenres;
  const cardGenres = [];

  // filter the genres cards
  const filterGenres = () => {
    for (let i = 0; i < genres.length; i++){
      const genreId = genres[i];
      const genre = genreType.find(g => g.id === genreId);
      if (genre) {
        cardGenres.push({genreName: genre.name});
      }
    }
  } 

  const handleWidthChange = () => {
    let mediaType = screenWidth <= 800 ? poster : backdrop
    let newOverview = screenWidth <= 800 ? "" : overview
    setCardType({poster: mediaType, overview: newOverview});
  }
  useEffect(() => {
    handleWidthChange();
    
  }, [screenWidth])

  filterGenres();


  return (
      <div className=" w-screen max-h-[85vh]">
        <div className='absolute flex flex-col justify-start mr-2 left-10 top-24 text-white z-10 gap-8 max-[800px]:top-20'>
          <h5 className={` name max-[1100px]:text-[3rem]`}>{name}</h5>
          <div className=' gap-2 flex flex-wrap items-center'>
            <div className='w-[50px] mr-3'>
              <CircularProgressbar 
              value={vote}
              maxValue={10}
              text={vote.toFixed(1)}
              styles={buildStyles({
                textColor: "white",
                pathColor: "red",
                trailColor: "transparent",
                textSize: "28px"
              })}/>
            </div>
            {cardGenres.map((genre, index) => {
              return <div key={index} className=" min-w-[80px] text-center py-1 px-2 shadow-md rounded-full bg-red-600 text-white font-sans font-semibold text-sm btn-primary hover:bg-red-800 active:shadow-none">{genre.genreName}</div>
            })}
          </div>
          <h5 className={` overview min-w-[25vw] max-w-[50vw] text-gray-200/100 max-[1400px]:max-w-[90vw] max-lines`}>{cardType.overview}</h5>
          <Link to={`/react-movie-app/${type}/${id}`} className="contents"><button className=" watchButton bg-red-700 hover:bg-red-800 text-gray-200/90 font-bold py-2 px-6 rounded mr-10 min-w-[25%] max-w-[150px] max-h-[40px]">{carouselData.Languages[language][0]['Watch button']}</button></Link>
        </div>
        <img src={cardType.poster} className=" w-full block opacity-40" />
      </div>
  )
}

export default CarouselCards