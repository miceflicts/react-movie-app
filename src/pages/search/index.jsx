import React from 'react'
import Search from "../../components/search/body"

function SearchPage({language}) {
  return (
    <div className="flex m-auto w-3/4 mt-16 max-[600px]:w-[85%] min-h-[800px]">
      <Search language={language}></Search>
    </div>
  )
}

export default SearchPage