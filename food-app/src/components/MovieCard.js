import React from 'react'
import StarRatingComponent from 'react-star-rating-component';


 const MovieCard = ({movie}) => {
    return (
        <div style={{border: "2px solid black",width: "150px", height: "200px",textAlign: "center"}}>
            <img src={movie.image} height="90px" width="110px" alt=""></img>
            <p>{movie.name}</p>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          editing={false}
          value={movie.rating}
        />
            <h4>{movie.year}</h4>
        </div>
    )
}
export default MovieCard;