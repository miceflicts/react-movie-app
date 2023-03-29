import React,{useState, useEffect} from 'react'
import PosterCarousel from '../../carousels/postersCarousel';

function Posters({info}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info && info[2].mediaPosters !== null) {
        setIsReady(true);
      }
    
    }, [info])
    

    return (
        <>
            {isReady ? <div>
                <div className='mt-10'>
                    <div className=' text-white'>
                        <h5 className=' inline-block text-4xl font-bold'>Posters</h5>
                    </div>
                </div>
                
                <PosterCarousel info={info}></PosterCarousel>
            </div> : null}
        </>
    )
}

export default Posters