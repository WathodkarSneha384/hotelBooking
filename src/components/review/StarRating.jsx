import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRatings = () => {
  const [rating, setRating] = useState("");
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, i) => {
        const currentRate = i + 1;

        return (
          <>
            <label>
              <input
                type="radio"
                style={{ display: "none" }}
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <FaStar
                size={25}
                color={currentRate <= rating ? "yellow" : "White"}
              />
            </label>
          </>
        );
      })}
    </div>
  );
};
export default StarRatings;
