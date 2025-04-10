import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRatings = (props) => {
  const [rating, setRating] = useState("");

  // On submit, initilize rating star
  useEffect(() => {
    setRating(props.rating);
  }, [props.rating]);

  const handlerRating = (value) => {
    setRating(value);
    props.ratingSubmit(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, i) => {
        const currentRate = i + 1;

        return (
          <>
            <label key={i}>
              <input
                type="radio"
                style={{ display: "none" }}
                name="rate"
                value={currentRate}
                onClick={() => handlerRating(currentRate)}
              />
              <FaStar
                size={20}
                color={currentRate <= rating ? "yellow" : "black"}
              />
            </label>
          </>
        );
      })}
    </div>
  );
};
export default StarRatings;
