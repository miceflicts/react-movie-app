import React,{useState, useEffect} from 'react'
import BackdropsCarousel from '../../carousels/backdropsCarousel';


function Backdrops({info}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info &&   info[2].mediaBackdrops !== null) {
        setIsReady(true);
      }
    
    }, [info])
    

    return (
        <>
            {isReady ? <div className='w-full'>
                <div className='mt-10'>
                    <div className=' text-white'>
                        <h5 className=' inline-block text-4xl font-bold'>Imagens</h5>
                    </div>
                </div>
                
                <div className='swiper-container'>
                    <BackdropsCarousel info={info}></BackdropsCarousel>
                </div>
            </div> : null}
        </>
    )
}

export default Backdrops