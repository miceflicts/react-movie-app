import React, { useState, useEffect} from 'react';
import SearchResults from '../results';
import { SearchMedia } from '../../../api';
import "./style.css"

function Search() {
    const [inputText, setInputText] = useState("");
    const [isSearchResultVisible, setIsSearchResultVisible] = useState(false)

    const [activeSearchFilter, setActiveSearchFilter] = useState("movie")
    const [activeFilter, setActiveFilter] = useState({movie: "active", tv: "off", person: "off"})

    const [searchResult, setSearchResult] = useState(null);
  
    const handleInputChange = (event) => {
      const textInput = event.target.value;
      setInputText(textInput);
    };

    const handleFilterChange = (event) => {
      setActiveSearchFilter(event.target.value);
    }

    const handleOnSearch = (event) => {
      setSearchResult(event);
    }

    // change the class of the button based on which one is active
    const changeButtonActiveBasedOnFilter = () => {
      let activeFilter = {movie: "off", tv: "off", person: "off"};
      activeFilter[activeSearchFilter] = "active";
      return activeFilter;
    }

    const updateSearchResultsVisibility = () => {
      inputText !== "" ? setIsSearchResultVisible(true) : setIsSearchResultVisible(false);
    };

    useEffect(() => {
      updateSearchResultsVisibility();
    
    }, [inputText])

    // runs when the active filter changes
    useEffect(() => {
     setActiveFilter(changeButtonActiveBasedOnFilter());
    
    }, [activeSearchFilter]);
    
    
    return (
      <>
        <div className='flex flex-col items-center w-full'>
          <div className='mb-3'>
            <button className= {`mr-2 text-gray-200/90 font-bold py-2 px-6 rounded max-[900px]:hidden} ${activeFilter.movie}`} value="movie" onClick={handleFilterChange}>Movie</button>
            <button className= {`mr-2 text-gray-200/90 font-bold py-2 px-6 rounded max-[900px]:hidden} ${activeFilter.tv}`} value="tv" onClick={handleFilterChange}>Tv</button>
            <button className= {`mr-2 text-gray-200/90 font-bold py-2 px-6 rounded max-[900px]:hidden} ${activeFilter.person}`} value="person" onClick={handleFilterChange}>People</button>
          </div>
          <div className='w-full max-[600px]:w-[90%]'>
            <input
            type="text"
            id="search" 
            placeholder="Search for Movies or TV Series"
            onChange={handleInputChange}
            className="input text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {isSearchResultVisible && (
            <>
              <SearchMedia type={activeSearchFilter} query={inputText} onSearch={handleOnSearch}></SearchMedia>
              {searchResult && searchResult.length > 0 && (
                <SearchResults info={searchResult}></SearchResults> 
              )}
            </>
          )}
        </div>
      </>
    );      
  }
  

export default Search;
