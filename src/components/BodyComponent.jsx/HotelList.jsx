import { Link } from "react-router-dom";
import hotels from "../../database/hotel_card_data"
import HotelCard from "./HotelCard";

const HotelList = () =>{

   const hotelCardList = hotels.map(cards=>
   <div key={cards.id} className="col">
        <Link to={"detail/"+cards.id}>
            <HotelCard hotel={cards}/>
        </Link>
    </div>);

   return(
    <div className="row">
        {hotelCardList}
    </div>
   )

}

export default HotelList;