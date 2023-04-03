import React,{useState, useEffect} from 'react'
import MediaCastCarousel from '../../carousels/mediaCastCarousel';
import mediaData from "../../../languages/mediaData.json"


function MediaCast({info, language}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info &&   info[1].cast.length > 0) {
        setIsReady(true);
      }
    
    }, [info])
    

    return (
        <>
            {isReady ? <div>
                <div className='mt-10'>
                    <div className=' text-white'>
                        <h5 className=' inline-block text-3xl font-bold'>{mediaData.Languages[language][0]["Cast"]}</h5>
                    </div>
                </div>
                
                <MediaCastCarousel info={info}></MediaCastCarousel>
            </div> : null}
        </>
    )
}

export default MediaCast