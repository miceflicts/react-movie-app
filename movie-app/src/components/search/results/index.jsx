import React from 'react';
import SearchCards from '../cards';

function SearchResults({ info, type }) {

  return (
    <div className='mt-10 mb-10 w-full min-h-full flex flex-wrap justify-center gap-4'>
      {info.map((media, index) =>
        media.poster !== undefined ? (
          <SearchCards
            name={media.name}
            poster={`https://image.tmdb.org/t/p/w500${media.poster}`}
            id={media.id}
            type={type}
            key={index}
          ></SearchCards>
        ) : null
      )}
    </div>
  );
}

export default SearchResults;
