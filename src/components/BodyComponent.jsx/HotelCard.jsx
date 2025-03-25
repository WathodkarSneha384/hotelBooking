const HotelCard = ({hotel}) =>{
    return (
        <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src={hotel.image} alt={hotel.name}/>
            <div className="card-body">
                <h4 className="card-title">{hotel.name} </h4>
                <h5 className="card-subtitle">  {hotel.city} in {hotel.state}</h5>
                <h5 className="card-lsattitle"> {hotel.rating}</h5>
                
            </div>
        </div>

    );

}

export default HotelCard;