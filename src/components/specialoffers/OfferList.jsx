import offersCard from "../../database/offers/OfferCards";
import Offer from "./Offer";

export const OfferList = () => {
  const SpecialOffersList = offersCard.map((newoffer) => (
    <div key={newoffer.id} className="col">
      <Offer offer={newoffer} />
    </div>
  ));
  return <div className="row"> {SpecialOffersList} </div>;
};
