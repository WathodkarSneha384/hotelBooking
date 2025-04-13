const HotelCard = ({ hotel }) => {
  return (
    <div className="card" style={{ width: "13rem", marginBottom: "30px" }}>
      <img
        className="card-img-top"
        src={hotel.image}
        alt={hotel.name}
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h4 className="card-title">{hotel.name} </h4>
        <h5 className="card-title">
          {hotel.city} in {hotel.state}
        </h5>
        <h5 className="card-title">Price: &#8377;{hotel.price}</h5>
        <h5 className="card-title">Rating: {hotel.rating}</h5>
      </div>
      <div>
        <h2
          className="text text-success"
          style={{
            marginBottom: "10px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        >
          Quick View
        </h2>
      </div>
    </div>
  );
};

export default HotelCard;
