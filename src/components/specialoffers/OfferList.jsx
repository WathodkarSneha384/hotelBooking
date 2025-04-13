import offersData from "../../database/offers_data";
import Offer from "./Offer";

export const OfferList = () => {
  const SpecialOffersList = offersData.map((newoffer) => (
    <div key={newoffer.id} className="col">
      <Offer offer={newoffer} />
    </div>
  ));
  return <div className="row"> {SpecialOffersList} </div>;
};
