import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';
import MediaMainInfos from '../../components/mediaDetails/mainInfos';
import MediaCast from '../../components/mediaDetails/cast';
import MediaBackdrops from '../../components/mediaDetails/backdrops';
import MediaPosters from '../../components/mediaDetails/posters';
import MediaRecommendations from '../../components/mediaDetails/recomendations';
import MediaVideos from '../../components/mediaDetails/videos';

function TvShowDetails() {
    const [mediaInfo, setMediaInfo] = useState(null)
    const {id} = useParams();
    const type = "tv";
    const language =  navigator.language || navigator.userLanguage; 

    const handleFetch = (event) => {
      setMediaInfo(event);
    }
    
  
    return (
      <>
          <div className='m-auto w-3/4 mt-20 max-[1300px]:w-[95%] min-h-[800px] gap-10'>
              <div className='flex gap-10'>
                <MediaMainInfos type={type} id={id} language={language} onFetch={handleFetch}></MediaMainInfos>
              </div>
              
              <MediaCast info={mediaInfo}></MediaCast>  
              <MediaBackdrops info={mediaInfo}></MediaBackdrops>
              <MediaVideos info={mediaInfo}></MediaVideos>
              <MediaPosters info={mediaInfo}></MediaPosters>
              <MediaRecommendations info={mediaInfo}></MediaRecommendations>

              <Footer language={language}></Footer>
          </div>
      </>
    )
  }

export default TvShowDetails