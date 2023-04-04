import React,{useState, useRef} from 'react'
import { useParams } from 'react-router-dom';
import MediaMainInfos from '../../components/mediaDetails/mainInfos';
import MediaCast from '../../components/mediaDetails/cast';
import MediaBackdrops from '../../components/mediaDetails/backdrops';
import Footer from '../../layouts/footer';
import MediaPosters from '../../components/mediaDetails/posters';
import MediaRecommendations from '../../components/mediaDetails/recomendations';
import MediaVideos from '../../components/mediaDetails/videos';

function MovieDetails() {
  const [mediaInfo, setMediaInfo] = useState(null)
  const {id} = useParams();
  const type = "movie";
  let language =  navigator.language || navigator.userLanguage; 

  const videoRef = useRef(null);

  const handleFetch = (event) => {
    setMediaInfo(event);
  }

  const handleExecuteScroll = () => {
    videoRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <>
        <div className='m-auto w-3/4 mt-20 max-[1300px]:w-[95%] min-h-[800px] gap-10'>
            <div className='flex gap-10'>
              <MediaMainInfos type={type} id={id} language={language} onFetch={handleFetch} onExecuteScroll={handleExecuteScroll}></MediaMainInfos>
            </div>
            
            <MediaCast info={mediaInfo} language={language}></MediaCast>
            <MediaBackdrops info={mediaInfo} language={language}></MediaBackdrops>

            <div ref={videoRef}>
              <MediaVideos info={mediaInfo} language={language}></MediaVideos>
            </div>
            
            <MediaPosters info={mediaInfo} language={language}></MediaPosters>
            <MediaRecommendations info={mediaInfo} language={language}></MediaRecommendations>

            <Footer language={language}></Footer>
        </div>
    </>
  )
}

export default MovieDetails