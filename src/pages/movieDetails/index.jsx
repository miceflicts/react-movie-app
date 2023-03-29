import React,{useState} from 'react'
import MainInfos from '../../components/mediaDetails/mainInfos';
import Cast from '../../components/mediaDetails/cast';
import Backdrops from '../../components/mediaDetails/backdrops';
import Footer from '../../layouts/footer';
import { useParams } from 'react-router-dom';
import Posters from '../../components/mediaDetails/posters';
import MediaRecommendations from '../../components/mediaDetails/recomendations';

function MovieDetails() {
  const [mediaInfo, setMediaInfo] = useState(null)
  const {id} = useParams();
  const type = "movie";
  const language =  navigator.language || navigator.userLanguage; 

  const handleFetch = (event) => {
    setMediaInfo(event);
  }
  
  return (
    <>
        <div className='m-auto w-3/4 mt-20 max-[1300px]:w-[95%] min-h-[800px] gap-10'>
            <div className='flex gap-10'>
              <MainInfos type={type} id={id} language={language} onFetch={handleFetch}></MainInfos>
            </div>
            
            <Cast info={mediaInfo}></Cast>
            <Backdrops info={mediaInfo}></Backdrops>
            <Posters info={mediaInfo}></Posters>
            <MediaRecommendations info={mediaInfo}></MediaRecommendations>

            <Footer language={language}></Footer>
        </div>
    </>
  )
}

export default MovieDetails