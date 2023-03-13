import React, { useState, useEffect, useRef } from 'react';
import "./style.css"

function Search() {
    const [inputText, setInputText] = useState("");
    const [isHidden, setIsHidden] = useState(true)

    const ref = useRef();
    const inputRef = useRef();
  
    const handleChange = (event) => {
      const textInput = event.target.value;
      setInputText(textInput);
    };

    // Stop rendering the search div based on the value of the input
    const updateSearchVisibilityBasedOnInput = () =>{
      inputText === "" ? setIsHidden(true) : setIsHidden(false);
    };

    // Will run when the inputText changes
    useEffect(() => {
      updateSearchVisibilityBasedOnInput();

      const handleClickOutsideComponent = (event) => {
        // Check if the clicked element is not the same of the current element
        if (ref.current && !ref.current.contains(event.target)) {
          // Check if the clicked element is not the input element
          if (inputRef.current && inputRef.current !== event.target) {
            setIsHidden(true);
          }
        }
      };

      // Function to check if the clicked element is the input
      const handleClickInsideInput = (event) => {
        if (inputRef.current === event.target) {
          updateSearchVisibilityBasedOnInput();
        };
      };
      
      // Add event listeners to the document object
      document.addEventListener('mousedown', handleClickOutsideComponent);
      document.addEventListener('mousedown', handleClickInsideInput);

      // Remove event listeners when the component unmounts (optmization)
      return () => {
        document.removeEventListener('mousedown', handleClickOutsideComponent);
        document.removeEventListener('mousedown', handleClickInsideInput);
      };

    }, [inputText]);
    
    return (
            <div className="relative w-full">
              <input
              type="text"
              id="search" 
              placeholder="Search for Movies or TV Series"
              onChange={handleChange}
              ref={inputRef}
              className="input text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {isHidden ? null : (
                  <div className="autoFill absolute w-full flex rounded-md z-10 min-h-[200px] mt-1" ref={ref}>
                      
                  </div>
              )}
            </div>
      );      
  }
  

export default Search;
