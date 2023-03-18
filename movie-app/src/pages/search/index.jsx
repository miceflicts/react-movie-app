import React from 'react'
import Search from "../../components/search/searchBar"

function SearchPage() {
  return (
    <div className="flex m-auto w-3/4 mt-20 max-[600px]:w-[95%] min-h-[800px]">
      <Search></Search>
    </div>
  )
}

export default SearchPage