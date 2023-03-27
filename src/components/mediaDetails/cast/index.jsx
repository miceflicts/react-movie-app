import React from 'react'
import MediaCarousel from '../../carousels/mediaCarousel'

function Cast({info}) {

    return (
        <div>
            <div className='mt-10'>
                <div className=' text-white'>
                    <h5 className=' inline-block text-4xl font-bold'>Elenco</h5>
                </div>
            </div>
            <MediaCarousel info={info}></MediaCarousel>
        </div>
    )
}

export default Cast