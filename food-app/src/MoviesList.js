import React from 'react'
import MovieCard from "./components/MovieCard"


 const MoviesList = (props) => {
     console.log(props)
    return (
        <div style={{display: "flex",justifyContent: "space-between",margin: "20px"}}>
           {props.movies.map((movie) => <MovieCard movie={movie}/>)}
        </div>
    )
}
export default MoviesList;