import hotels from "../../database/hotel_card_data"
import HotelCard from "./HotelCard";

const HotelList = () =>{

   const hotelCardList = hotels.map(cards=><HotelCard hotel={cards}/>)

   return(
    <div className="row">
        {hotelCardList}
    </div>
   )

}

export default HotelList;