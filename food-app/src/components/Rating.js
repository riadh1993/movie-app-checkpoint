import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

 const Rating = ({ratingF,rating}) => {
    return (
        <div>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={(nextValue) => {ratingF(nextValue)}}
        />
        </div>
    )
}
export default Rating;

 