import React,{useState, useEffect} from 'react'
import genresData from "../../../languages/genresData.json"
import { GetMediasDetails } from '../../../api'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "./style.css"
import 'react-circular-progressbar/dist/styles.css';

function MainInfos({type, id, language}) {
  const [mediaInfo, setMediaInfo] = useState(null);
  const [cardGenres, setCardGenres] = useState([]);

  const movieGenres = genresData.Languages[language][0]["Movie genres"];
  const tvGenres = genresData.Languages[language][0]["Tv genres"];
  const genreType = type === "movie" ? movieGenres : tvGenres;

  // filter the genres cards
  const filterGenres = () => {
    const updatedGenres = [];
    for (let i = 0; i < mediaInfo[0].genres.length; i++){
      const genreId = mediaInfo[0].genres[i];
      const genre = genreType.find(g => g.id === genreId.id);
      if (genre) {
        updatedGenres.push({genreName: genre.name});
      }
    }
    setCardGenres(updatedGenres);
  } 

  const handleFetch = (event) => {
    setMediaInfo(event)
  }

  useEffect(() => {
    mediaInfo === null ? null : filterGenres();
  }, [mediaInfo])

  return (
    <>
      <GetMediasDetails type={type} id={id} language={language} onFetch={handleFetch}></GetMediasDetails>

      {mediaInfo !== null ? 
        <div className=' w-full flex max-[900px]:flex-col max-[900px]:items-center gap-10 mt-10'>
          <img className='absolute top-0 left-0 w-full z-[-10] max-h-[850px] opacity-50 min-w-[1050px] object-cover' src={`https://image.tmdb.org/t/p/original/${mediaInfo[0].backdrop_path}`} alt=""></img>
          
          <img className=' bg-slate-600 shadow-2xl w-[40%] max-w-[520px] min-w-[250px] max-[900px]:w-[69%] max-[900px]:max-w-[400px]' src={`https://image.tmdb.org/t/p/original/${mediaInfo[0].poster_path}`}></img>
          <div className=' text-white mt-5 flex flex-col w-2/4 gap-5 max-[900px]:w-full'>
            <h5 className=' text-5xl font-bold'>{mediaInfo[0].name}</h5>
            <div className=' gap-2 flex flex-wrap items-center'>
              <div className='w-[50px] mr-3'>
                <CircularProgressbar 
                value={mediaInfo[0].vote_average}
                maxValue={10}
                text={mediaInfo[0].vote_average.toFixed(1)}
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
            {mediaInfo[0].tagline && 
              <h5 className='text-gray-300 text-base'>{mediaInfo[0].tagline}</h5>
            }
            <h5 className='text-gray-200 text-base max-lines'>{mediaInfo[0].overview}</h5>
            <button className=" watchButton bg-red-700 hover:bg-red-800 text-gray-200/90 font-bold py-2 px-6 rounded mr-10 min-w-[25%] max-w-[150px] max-h-[40px]">Ver agora</button>
          </div>
        </div>
        : <div>No info yet</div>}
    </>
  )
}

export default MainInfos;
