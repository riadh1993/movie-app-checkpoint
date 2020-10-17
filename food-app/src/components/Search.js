import React, {useState} from 'react'

 const Search = ({search}) => {
     
    return (
       
        <input style={{margin: "30px"}} type="text" onChange={(e) => search(e.target.value)}></input>
    
    )
}
export default Search;