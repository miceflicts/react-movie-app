import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { GetPersonInfo } from '../../api';
import Footer from '../../layouts/footer';
import personData from "../../languages/personData.json"

function Person() {
    const [personInfo, setPersonInfo] = useState(null);
    const [worksInfo, setWorksInfo] = useState(null);

    const {id} = useParams();
    let language =  navigator.language || navigator.userLanguage; 

    const handleFetch = (event) => {
      setPersonInfo(event);
    }

    const handleWorksFetch = (event) => {
      setWorksInfo(event);
    }
    
    return (
      <>
         <GetPersonInfo personId={id} language={language} onFetch={handleFetch} onWorksFetch={handleWorksFetch}></GetPersonInfo>
         {personInfo !== null && worksInfo !== null ?
          <div className='m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px] gap-10 flex flex-col'>
              <div className='flex gap-10 max-[900px]:flex-col max-[900px]:items-center'>
                <img className=' bg-yellow-500 h-96' src={`https://image.tmdb.org/t/p/original/${personInfo[0].image}`}></img>

                <div className=' text-white mt-5 flex flex-col'>
                  <h5 className=' text-2xl font-bold'>{personInfo[0].name} ({personInfo[0].birthDay})</h5>
                  <span className=' mt-4 break-words'>{personInfo[0].biography}</span>
                </div>
              </div>
              <div className=' flex flex-col text-white gap-2'>
                <h5 className=' inline-block text-3xl font-bold'>{personData.Languages[language][0]['Text']}</h5>
                
                <div className='flex flex-wrap justify-center items-center gap-4 mt-5 mb-10'>
                  {worksInfo.map((info, index) => {
                    return <Link to={`/react-movie-app/${info.type}/${info.id}`} key={index} className="contents"><img key={index} src={`https://image.tmdb.org/t/p/original/${info.poster}`} className="max-w-[300px] max-[850px]:min-w-[45%] max-[850px]:max-w-[0px] aspect-[3.4/5] hover:opacity-40"></img></Link>
                  })}
                </div>
              </div>
              <Footer language={language}></Footer>
          </div>
          : <div className='m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px] gap-10 flex flex-col items-center'>
              <div className=' text-white font-bold text-2xl'> No info from the person</div>
            </div>}
      </>
    )
}

export default Person