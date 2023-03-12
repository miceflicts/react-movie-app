import React, { useState, useEffect } from 'react';
import "./style.css"

function Search() {
    const [inputText, setInputText] = useState("");
    const [isHidden, setIsHidden] = useState(true)
  
    const handleChange = (event) => {
      const textInput = event.target.value;
      setInputText(textInput);
    };

    useEffect(() => {
      inputText === "" ? setIsHidden(true) : setIsHidden(false);
    }, [inputText])
    
    return (
            <div className="relative w-full">
                <input
                type="text"
                id="search"
                placeholder="Search for Movies or TV Series"
                onChange={handleChange}
                className="input text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {isHidden ? null : (
                    <div className="autoFill absolute w-full flex rounded-md">
                        <div className=" w-full min-h-[200px] mt-1"></div>
                    </div>
                )}
            </div>
      );      
  }
  

export default Search;
