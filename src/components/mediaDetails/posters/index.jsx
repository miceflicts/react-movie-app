import React,{useState, useEffect} from 'react'
import MediaPosterCarousel from '../../carousels/mediaPosterCarousel';
import mediaData from "../../../languages/mediaData.json"

function MediaPosters({info, language}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info && info[2].mediaPosters.length > 0) {
        setIsReady(true);
      }
    
    }, [info])
    

    return (
        <>
            {isReady ? <div>
                <div className='mt-10'>
                    <div className=' text-white'>
                        <h5 className=' inline-block text-3xl font-bold'>{mediaData.Languages[language][0]["Posters"]}</h5>
                    </div>
                </div>
                
                <MediaPosterCarousel info={info}></MediaPosterCarousel>
            </div> : null}
        </>
    )
}

export default MediaPosters