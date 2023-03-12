import React,{useEffect, useRef} from 'react'

function HamburguerMenu(props) {

  const ref = useRef();

  useEffect(() => {

    const handleClickInsideComponent = (event) => {
      // Check if the clicked element is the same of the current element
      if (ref.current && ref.current.contains(event.target)) {
          const isVisible = false;
          props.onClick(isVisible);
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
        <div className="absolute bg-[#161c24] h-full w-[250px] left-0 top-0 z-10 overflow-hidden shadow-2xl"></div>
        <div className='absolute bg-black/40 h-screen w-full right-0 top-0 z-[9]' ref={ref}></div>
    </>
  )
}

export default HamburguerMenu