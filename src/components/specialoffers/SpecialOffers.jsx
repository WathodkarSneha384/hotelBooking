import React, { useState } from "react";
import OfferList from "./OfferList";

export const SpecialOffers = () => {
  const [showOffers, setShowOffers] = useState(false);

  const handleSpecialOfferBtn = () => {
    setShowOffers(true);
  };

  return (
    <div>
      <button
        className="button px-2 py-2 mx-2 my-2 "
        style={{
          background: "#8b4513",
          color: "#fffafa",
          borderRadius: " 5px",
        }}
        onClick={handleSpecialOfferBtn}
      >
        Special Offers
      </button>
      {showOffers && <OfferList />}
    </div>
  );

};
