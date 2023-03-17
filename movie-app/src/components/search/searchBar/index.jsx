import React, { useState, useEffect} from 'react';
import SearchResults from '../results';
import "./style.css"

function Search() {
    const [inputText, setInputText] = useState("");
  
    const handleChange = (event) => {
      const textInput = event.target.value;
      setInputText(textInput);
    };

    useEffect(() => {
     
    
    }, [inputText])
    
    
    return (
      <>
        <div className='flex flex-col items-center w-full'>
          <div className='w-full max-[600px]:w-[90%]'>
            <input
            type="text"
            id="search" 
            placeholder="Search for Movies or TV Series"
            onChange={handleChange}
            className="input text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <SearchResults></SearchResults>
        </div>
      </>
    );      
  }
  

export default Search;
