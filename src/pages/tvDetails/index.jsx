import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../layouts/footer';
import MainInfos from '../../components/mediaDetails/mainInfos';

function TvShowDetails() {
    const {id} = useParams();
    const type = "tv";
    const language =  navigator.language || navigator.userLanguage; 
  
    return (
      <>
          <div className='m-auto w-3/4 mt-20 max-[1300px]:w-[95%] min-h-[800px] gap-10 flex flex-col'>
              <div className='flex gap-10'>
                <MainInfos type={type} id={id} language={language}></MainInfos>
              </div>
              <Footer language={language}></Footer>
          </div>
      </>
    )
  }

export default TvShowDetails