import React from 'react'
import SearchCards from '../cards';

function SearchResults({info}) {
  console.log(info);
  return (
    <div className=' mt-10 w-full min-h-full flex flex-wrap justify-center gap-4 '>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
      <SearchCards></SearchCards>
    </div>
  )
}

export default SearchResults;