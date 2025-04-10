import { useParams } from "react-router-dom";
import hotels from "../../database/hotel_card_data";
const HotelDetail = ()=>{

    const {cards_id} = useParams();
    const hotelObj = hotels.find(cards=>cards.id==cards_id)
    return(
        <div>
            <div className="d-flex justify-content-evenly m-5 container border rounded">
                
                <div>
                    <img src={hotelObj.image} alt={hotelObj.name} style={{width:'500px'}}/>
                </div>
                <div style={{fontSize:'30px', marginTop:'100px'}}>
                    <h2>{hotelObj.name}</h2>
                    <h3>{hotelObj.city} {hotelObj.state}</h3>
                    <h3>{hotelObj.rating}</h3>
                </div>
                <div >
                    <button className='btn btn-outline-success mt-3 m-3'><a href="/">Back</a></button>
                </div>
                </div>
                <div className="container border rounded mb-4 mt-4" style={{textAlign:'center'}}>
                    <h2 style={{fontSize:'40px'}}>About</h2>
                    <h3 className="text-success" style={{fontSize:'30px'}}>{hotelObj.specification.quality.hotel1}</h3>
                    <h3 style={{fontSize:'30px'}}>{hotelObj.specification.quality.hotel2}</h3>
                    <h3 className="text-danger" style={{fontSize:'20px'}}>Address</h3>
                    <h3>{hotelObj.address}</h3>
                    <h3 className="text-info" style={{fontSize:'20px'}}>Contact</h3>
                    <h3>{hotelObj.phone}</h3>
                </div>
            
            <div className="container border rounded">
                <table className='table' style={{ justifyItems:'center'}}>
                    <thead>
                       <tr style={{fontSize:'25px'}}>
                           <th>Amenities</th>
                           <th>Details</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <th>Internet</th>
                          <td>{ hotelObj.specification.internet}</td>
                          
                       </tr>
                       <tr>
                           <th>Food & Drink</th>
                          <td>{hotelObj.specification.FoodAndDrink}</td>
                       </tr>
                       <tr>
                         <th> Parking & Transport</th>
                         <td>{hotelObj.specification.ParkingTransport}</td>
                       </tr>
                       <tr>
                        <th>Services</th>
                        <td>{hotelObj.specification.Services}</td>
                       </tr>

                       <tr>
                        <th>Pools</th>
                        <td>{hotelObj.specification.Pools}</td>
                       </tr>

                       <tr>
                        <th>Children</th>
                        <td>{hotelObj.specification.Children}</td>
                       </tr>
                       <tr>
                        <th>Business & Events</th>
                        <td>{hotelObj.specification.BusinessEvents}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default HotelDetail;