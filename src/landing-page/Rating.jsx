import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function RatingComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  );
}
