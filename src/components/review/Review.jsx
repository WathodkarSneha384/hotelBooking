import { useState } from "react";
import StarRatings from "./StarRating";

const Review = (props) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState();

  const ratingSubmit = (value) => {
    setRating(value);
  };

  const handlerSubmit = () => {
    props.reviewSubmit({ review, rating });
    setRating(0);
    setReview("");
  };

  return (
    <div>
      <h2 className="m-3">"What Our Guest Say...!"</h2>
      <div className="border rounded m-3 p-3 bg-secondary">
        <div className="mb-3">
          <StarRatings rating={rating} ratingSubmit={ratingSubmit} />
        </div>
        <input
          className="form-control p-3"
          value={review}
          type="text"
          placeholder="What's your feedback"
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="button mt-3">
          <button className="btn btn-success" onClick={handlerSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Review;
