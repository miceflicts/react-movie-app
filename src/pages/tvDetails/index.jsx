import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';
import MainInfos from '../../components/mediaDetails/mainInfos';

function TvShowDetails() {
    const {type} = useParams();
    console.log(type)
    const language =  navigator.language || navigator.userLanguage; 
  
    return (
      <>
          <div className='m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px] gap-10 flex flex-col'>
              <div className='flex gap-10 max-[900px]:flex-col max-[900px]:items-center'>
                <MainInfos></MainInfos>
              </div>
              <Footer language={language}></Footer>
          </div>
      </>
    )
  }

export default TvShowDetails

{/* <div className=' flex flex-col text-white gap-2'>
<h5 className='inline-block underline underline-offset-auto decoration-red-500 text-3xl font-bold'>Medias</h5>
<div className='flex flex-wrap justify-center items-center gap-4 mt-5 mb-10'>
  {worksInfo.map((info, index) => {
    return <Link to={`/react-movie-app/${info.type}/${info.id}`} key={index} className="contents"><img key={index} src={""} className="max-w-[300px] max-[850px]:min-w-[45%] max-[850px]:max-w-[0px] aspect-[3.4/5] hover:opacity-40"></img></Link>
  })}
</div>
</div> */}