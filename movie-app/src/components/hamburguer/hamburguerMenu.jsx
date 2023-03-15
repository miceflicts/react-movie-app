import React,{useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logos/alt_short.svg"

function HamburguerMenu(props) {

  const ref = useRef();
  const refLi = useRef();

  // set the function props to false (will close the hamburguer menu)
  const setOnClickProps = (value) => {
    props.onClick(value);
  };

  useEffect(() => {

    const handleClickInsideComponent = (event) => {
      // Check if the clicked element is the same of the current element
      if (ref.current && ref.current.contains(event.target)) {
          const isVisible = false;
          setOnClickProps(isVisible)
      }
      // todo make this works (check if the element clicked is Li, if it is close the hamburguer)
      if (refLi.current && refLi.current.contains(event.target)) {
          const isVisible = false;
          setOnClickProps(isVisible)
      }
    };
    // Add event listeners to the document object
    document.addEventListener('mousedown', handleClickInsideComponent);

    // Remove event listeners when the component unmounts (optmization)
    return () => {
      document.removeEventListener('mousedown', handleClickInsideComponent);
    };

  }, []);
  

  return (
    <>
        <div className="absolute bg-[#161c24] h-full w-[250px] left-0 top-0 z-10 overflow-hidden shadow-2xl">
            <div className='flex flex-col justify-center items-center gap-10 w-full'>
              <Link to="/" className='contents'><img src={logo} alt="" className=' w-3/4 mt-10'/></Link>
              <ul className='flex flex-col gap-5 mt-10 text-gray-200/90 font-medium text-base cursor-pointer'>
                <Link to="/" className='hover:text-gray-200/70'><li ref={refLi}>Home</li></Link>
                <Link to="/movie" className='hover:text-gray-200/70'><li ref={refLi}>Movies</li></Link>
                <Link to="/tv" className='hover:text-gray-200/70'><li ref={refLi}>Tv</li></Link>
              </ul>
              <Link to="/search"><button className=" bg-[#0d1014] hover:bg-[#060708] text-gray-200/90 font-bold py-2 px-20 rounded">Search</button></Link>
            </div>
        </div>
        <div className='absolute bg-black/40 h-screen w-full right-0 top-0 z-[9]' ref={ref}></div>
    </>
  )
}

export default HamburguerMenu