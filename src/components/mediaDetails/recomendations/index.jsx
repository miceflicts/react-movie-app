import React,{useState, useEffect} from 'react'
import MediaRecommendationsCarousel from '../../carousels/mediaRecommendationsCarousel';

function MediaRecommendations({info}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info && info[4].recommendations.length > 0) {
        setIsReady(true);
      }
    
    }, [info])
  
  return (
    <>
        {isReady ? <div>
            <div className=' text-white mt-10 mb-10'>
                <h5 className=' inline-block text-3xl font-bold'>Recomendações</h5>
            </div>
                
            <MediaRecommendationsCarousel info={info}></MediaRecommendationsCarousel>
        </div> : null}
    </>
  )
}

export default MediaRecommendations