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

    const setOverFlow = () => {
        document.body.style.overflow = isVisible ? 'auto' : 'hidden';
    };

    return (
        <>
            <a href="#" onClick={handleClick}><img src={hamburguer} alt="" className='w-full'/></a>
            
            {!isVisible ? null : (
                <HamburguerMenu onClick={handleHamburguerClick}></HamburguerMenu>
            )}
        </>
    )
};

export default Hamburguer
