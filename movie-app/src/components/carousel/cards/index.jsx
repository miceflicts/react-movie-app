import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function CarouselCards({name, backdrop, genres, overview, type, vote, poster, id, screenWidth}) {
  const [cardType, setCardType] = useState({poster: backdrop, overview: overview})
  
  const movieGenres = {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]};
  const tvGenres = {"genres":[{"id":10759,"name":"Action & Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":10762,"name":"Kids"},{"id":9648,"name":"Mystery"},{"id":10763,"name":"News"},{"id":10764,"name":"Reality"},{"id":10765,"name":"Sci-Fi & Fantasy"},{"id":10766,"name":"Soap"},{"id":10767,"name":"Talk"},{"id":10768,"name":"War & Politics"},{"id":37,"name":"Western"}]};
  const genreType = type === "movie" ? movieGenres : tvGenres;
  const cardGenres = []

  const filterGenres = () => {
    for (let i = 0; i < genres.length; i++){
      const genreId = genres[i];
      const genre = genreType.genres.find(g => g.id === genreId);
      if (genre) {
        cardGenres.push({genreName: genre.name});
      }
    }
  }

  const handleWidthChange = () => {
    let type = screenWidth <= 800 ? poster : backdrop
    let newOverview = screenWidth <= 800 ? "" : overview
    setCardType({poster: type, overview: newOverview});
  }
  useEffect(() => {
    handleWidthChange();
    
  }, [screenWidth])

  filterGenres();
  

  return (
      <div className=" w-screen max-h-[75vh]">
        <div className='absolute flex flex-col justify-start mr-2 left-10 top-24 text-white z-10 gap-8 max-[1100px]:top-10 max-[800px]:top-20'>
          <h5 className={` name`}>{name}</h5>
          <div className=' gap-2 flex flex-wrap items-center'>
            <h5 className=' mr-2 font-bold'>{vote.toFixed(1)}</h5>
            {cardGenres.map((genre, index) => {
              return <div key={index} className=" min-w-[80px] text-center py-1 px-2 shadow-md rounded-full bg-red-600 text-white font-sans font-semibold text-sm btn-primary hover:bg-red-800 active:shadow-none">{genre.genreName}</div>
            })}
          </div>
          <h5 className={` overview min-w-[25vw] max-w-[50vw] text-gray-200/100 max-[1400px]:max-w-[90vw] max-lines`}>{cardType.overview}</h5>
          <Link to={`/${type}/${id}`} className="contents"><button className=" watchButton bg-red-700 hover:bg-red-800 text-gray-200/90 font-bold py-2 px-6 rounded mr-10 min-w-[25%] max-w-[150px] max-h-[40px]">Watch now</button></Link>
        </div>
        <img src={cardType.poster} className=" w-full block opacity-40" />
      </div>
  )
}

export default CarouselCards