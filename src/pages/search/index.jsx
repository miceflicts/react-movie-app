import React from 'react'
import Search from "../../layouts/search/body"

function SearchPage({language}) {
  return (
    <div className="flex m-auto w-3/4 mt-36 max-[600px]:w-[85%] min-h-[800px]">
      <Search language={language}></Search>
    </div>
  )
}

export default SearchPage