import React,{useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import headerData from "../../languages/headerData.json"
import logo from "../../assets/logos/alt_short.svg"

function HamburguerMenu({language, onClick}) {

  const ref = useRef();
  const refHamburguerElements = useRef();

  // set the function props to false (will close the hamburguer menu)
  const setOnClickProps = (value) => {
    onClick(value);
  };

  useEffect(() => {

    const handleClickInsideComponent = (event) => {
      // Check if the clicked element is the same of the current element
      if (ref.current && ref.current.contains(event.target)) {
          let isVisible = false;
          setOnClickProps(isVisible)
      }
    }

    // closes the hamburguer menu when one of its elements is clicked
    const handleHamburguerElementsClicks = (event) => {
      if (refHamburguerElements.current && refHamburguerElements.current.contains(event.target)) {
        if (event.target.tagName.toLowerCase() === "li" || event.target.tagName.toLowerCase() === "button") {
          let isVisible = false;
          setTimeout(()=>{setOnClickProps(isVisible)}, 200)
        }
      }
    }

    // Add event listeners to the document object
    document.addEventListener('mousedown', handleClickInsideComponent);
    document.addEventListener('mousedown', handleHamburguerElementsClicks);

    // Remove event listeners when the component unmounts (optmization)
    return () => {
      document.removeEventListener('mousedown', handleClickInsideComponent);
      document.removeEventListener('mousedown', handleHamburguerElementsClicks);
    };

  }, []);
  

  return (
    <>
        <div className="absolute bg-[#161c24] h-screen w-[250px] left-0 top-0 z-10 overflow-hidden shadow-2xl">
            <div className='flex flex-col justify-center items-center gap-10 w-full' ref={refHamburguerElements}>
              <Link to="/react-movie-app/" className='contents'><img src={logo} alt="" className=' w-3/4 mt-10'/></Link>
              <ul className='flex flex-col gap-5 mt-10 text-gray-200/90 font-medium text-base cursor-pointer'>
                <Link to="/react-movie-app/" className='hover:text-gray-200/70' ><li>{headerData.Languages[language][0]['Home']}</li></Link>
                <Link to="/react-movie-app/movie" className='hover:text-gray-200/70'><li>{headerData.Languages[language][0]['Movies']}</li></Link>
                <Link to="/react-movie-app/tv" className='hover:text-gray-200/70'><li>{headerData.Languages[language][0]['Tv']}</li></Link>
              </ul>
              <Link to="/react-movie-app/search"><button className=" bg-[#0d1014] hover:bg-[#060708] text-gray-200/90 font-bold py-2 px-20 rounded">{headerData.Languages[language][0]['Search']}</button></Link>
            </div>
        </div>
        <div className='absolute bg-black/40 h-screen w-full right-0 top-0 z-[9]' ref={ref}></div>
    </>
  )
}

export default HamburguerMenu