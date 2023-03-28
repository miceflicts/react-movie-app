import React,{useState, useEffect} from 'react'
import MediaCarousel from '../../carousels/mediaCarousel'

function Cast({info}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (info &&   info[1].cast !== null) {
        setIsReady(true);
      }
    
    }, [info])
    

    return (
        <>
            {isReady ? <div>
                <div className='mt-10'>
                    <div className=' text-white'>
                        <h5 className=' inline-block text-4xl font-bold'>Elenco</h5>
                    </div>
                </div>
                
                <MediaCarousel info={info}></MediaCarousel>
            </div> : null}
        </>
    )
}

export default Cast