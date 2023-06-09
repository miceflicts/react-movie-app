import React,{useState, useEffect} from 'react'
import MediaBackdropsCarousel from '../../carousels/mediaBackdropsCarousel';
import mediaData from "../../../languages/mediaData.json"

function MediaBackdrops({info, language}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info &&   info[2].mediaBackdrops.length > 0) {
        setIsReady(true);
      }
    
    }, [info])    

    return (
        <>
            {isReady ? <div className='w-full'>
                <div className='mt-10'>
                    <div className=' text-white'>
                        <h5 className=' inline-block text-3xl font-bold'>{mediaData.Languages[language][0]["Images"]}</h5>
                    </div>
                </div>
                
                <div>
                    <MediaBackdropsCarousel info={info}></MediaBackdropsCarousel>
                </div>
            </div> : null}
        </>
    )
}

export default MediaBackdrops