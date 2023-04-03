import React,{useState,useEffect} from 'react'
import MediaVideosCarousel from '../../carousels/mediaVideosCarousel';
import mediaData from "../../../languages/mediaData.json"

function MediaVideos({info, language}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info && info[3].videos.length > 0) {
        setIsReady(true);
      }
    
    }, [info])
    
    return (
        <>
            {isReady ? 
            <div className='w-full'>
                <div className=' text-white mt-10'>
                    <h5 className=' inline-block text-3xl font-bold'>{mediaData.Languages[language][0]["Videos"]}</h5>
                </div>
                <div>
                    <MediaVideosCarousel info={info}></MediaVideosCarousel>
                </div>
            </div> : null}
        </>
    )
}

export default MediaVideos

