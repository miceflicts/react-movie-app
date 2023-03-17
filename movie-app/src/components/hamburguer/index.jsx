import React,{useState, useEffect} from 'react'
import hamburguer from "../../assets/menu/hamburguer.png"
import HamburguerMenu from './hamburguerMenu';

function Hamburguer() {
    const [isVisible, setIsVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    
    const handleClick = () => {
        setVisibility();
    };
    
    const handleHamburguerClick = (event) => {
        setIsVisible(event);
    };

    // set the hamburguer div visibility with the ternary operator
    const setVisibility = () => {
        isVisible === false ? setIsVisible(true) : setIsVisible(false);
    };

    const getWindowSize = () => {
        const width = window.innerWidth;
        return width;
    };

    // auto close the hamburguer menu to prevent the overflow from being hidden in resize
    const autoCloseHamburguerMenu = () => {
        if (screenWidth >= 900){
            setIsVisible(false);
        };
    };

    // used to prevent the page from scrolling when the hamburguer menu is opened
    const setOverFlow = () => {
        document.body.style.overflow = !isVisible ? 'auto' : 'hidden';
    };

    useEffect(() => {
      const handleWindowResize = () => {
        setScreenWidth(getWindowSize());
      };
    
      window.addEventListener("resize", handleWindowResize);
      
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      }

    }, [])

    useEffect(() => {
      autoCloseHamburguerMenu()
    }, [screenWidth])
    
    useEffect(() =>{
        setOverFlow()
    }, [isVisible]);

    return (
        <>
            <img src={hamburguer} onClick={handleClick} alt="" className='w-full cursor-pointer'/>
            
            {!isVisible ? null : (
                <HamburguerMenu onClick={handleHamburguerClick}></HamburguerMenu>
            )}
        </>
    )
};

export default Hamburguer
