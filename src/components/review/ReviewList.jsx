import { useState } from "react";
import Review from "./Review";
const ReviewList = () => {
  const [showReviews, setShowReviews] = useState(false);
  const handleShowReview = () => {
    setShowReviews(true);
  };
  return (
    <div>
      <button className="btn btn-outline-secondary" onClick={handleShowReview}>
        Review
      </button>
      {showReviews && <Review />}
    </div>
  );
};
export default ReviewList;
