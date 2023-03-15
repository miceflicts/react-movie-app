import React,{useState} from 'react'
import hamburguer from "../../assets/menu/hamburguer.png"
import HamburguerMenu from './hamburguerMenu';

function Hamburguer() {
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        setVisibility();
    };

    const handleHamburguerClick = (event) => {
        setIsVisible(event);
        setOverFlow();
    };

    // set the hamburguer div visibility with the ternary operator
    const setVisibility = () => {
        isVisible === false ? setIsVisible(true) : setIsVisible(false);
        setOverFlow();
    };

    // used to prevent the page from scrolling
    const setOverFlow = () => {
        document.body.style.overflow = isVisible ? 'auto' : 'hidden';
    };

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
