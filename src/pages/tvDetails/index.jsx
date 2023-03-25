import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';

function TvShowDetails() {
    const {id} = useParams();
    const language =  navigator.language || navigator.userLanguage; 
  
    return (
      <>
          <div className='m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px] gap-10 flex flex-col'>
              <div className='flex gap-10 max-[900px]:flex-col max-[900px]:items-center'>
                <img className=' bg-yellow-500 h-96' src=""></img>

                <div className=' text-white mt-5 flex flex-col'>
                  <h5 className=' text-2xl font-bold'>Test ()</h5>
                  <span className=' mt-4 break-words'>Biography</span>
                </div>
              </div>
              <div className=' flex flex-col text-white gap-2'>
                <h5 className='text-3xl font-bold'>Medias</h5>
                <div className=' w-[100px] h-[6px] bg-red-600'></div>
                <div className='flex flex-wrap justify-center items-center gap-4 mt-5 mb-10'>
                  {/* {worksInfo.map((info, index) => {
                    return <Link to={`/react-movie-app/${info.type}/${info.id}`} key={index} className="contents"><img key={index} src={""} className="max-w-[300px] max-[850px]:min-w-[45%] max-[850px]:max-w-[0px] aspect-[3.4/5] hover:opacity-40"></img></Link>
                  })} */}
                </div>
              </div>
              <Footer language={language}></Footer>
          </div>
      </>
    )
  }

export default TvShowDetails