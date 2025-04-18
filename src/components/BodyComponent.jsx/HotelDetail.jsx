import { useLocation, useParams } from "react-router-dom";
import hotels from "../../database/hotel_card_data";
import { Link } from "react-router-dom";
import Review from "../review/Review";
import { useMemo, useState } from "react";

const HotelDetail = () => {
  const { cards_id } = useParams();
  const hotelData = hotels.find((cards) => cards.id === cards_id);
  const [hotel, setHotel] = useState(hotelData);
  const location = useLocation();
  const discount = location?.state?.discount || 0;

  const handleBookNow = () => {
    alert("Hotel Booking Confirmed");
  };

  // on submit push rating object to hotel ratings array
  const reviewSubmit = (data) => {
    const updated = { ...hotel };
    updated.review.push({
      id: updated.review.length,
      rating: data.rating,
      comment: data.review,
    });
    setHotel(updated);
  };

  // const discountdPrice = useMemo(() => {
  //   return hotel.price - (hotel.price * discount) / 100;
  // }, [hotel, discount]);

  const discountdPrice = hotel.price - (hotel.price * discount) / 100;

  return (
    <div>
      <div className="d-flex justify-content-evenly m-5 container border rounded">
        <div>
          <img src={hotel.image} alt={hotel.name} style={{ width: "500px" }} />
        </div>
        <div style={{ fontSize: "30px", marginTop: "100px" }}>
          <h2>{hotel.name}</h2>
          <h3>
            {hotel.city} {hotel.state}
          </h3>
          <h5>
            <span className="pr-2">&#8377;</span>

            {discount ? (
              <>
                <span style={{ textDecoration: "line-through", color: "#F00" }}>
                  {hotel.price}
                </span>
                <span className="pl-2">{discountdPrice}</span>
                <div className="">{discount} % discount applied</div>
              </>
            ) : (
              hotel.price
            )}
          </h5>

          <Link to={"/offers"} state={{ hotelId: cards_id }}>
            <button
              className="button btn btn-sm px-2 my-2 "
              style={{
                background: "gray",
                color: "white",
                borderRadius: " 5px",
              }}
            >
              See offers
            </button>
          </Link>

          <h3>Rating: {hotel.rating}</h3>

          <button
            onClick={handleBookNow}
            className="btn btn-md btn-success px-2 my-2 "
          >
            Book Now
          </button>
        </div>

        <Link to={"/"}>
          <button className="btn btn-outline-success mt-3 m-3">Back</button>
        </Link>
      </div>

      <div
        className="container border rounded mb-4 mt-4"
        style={{ textAlign: "center" }}
      >
        <h2 style={{ fontSize: "40px" }}>About</h2>
        <h3 className="text-success" style={{ fontSize: "30px" }}>
          {hotel.specification.quality.hotel1}
        </h3>
        <h3 style={{ fontSize: "30px" }}>
          {hotel.specification.quality.hotel2}
        </h3>
        <h3 className="text-danger" style={{ fontSize: "20px" }}>
          Address
        </h3>
        <h3>{hotel.address}</h3>
        <h3 className="text-info" style={{ fontSize: "20px" }}>
          Contact
        </h3>
        <h3>{hotel.phone}</h3>
      </div>

      <div className="container border rounded">
        <table className="table" style={{ justifyItems: "center" }}>
          <thead>
            <tr style={{ fontSize: "25px" }}>
              <th>Amenities</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Internet</th>
              <td>{hotel.specification.internet}</td>
            </tr>
            <tr>
              <th>Food & Drink</th>
              <td>{hotel.specification.FoodAndDrink}</td>
            </tr>
            <tr>
              <th> Parking & Transport</th>
              <td>{hotel.specification.ParkingTransport}</td>
            </tr>
            <tr>
              <th>Services</th>
              <td>{hotel.specification.Services}</td>
            </tr>

            <tr>
              <th>Pools</th>
              <td>{hotel.specification.Pools}</td>
            </tr>

            <tr>
              <th>Children</th>
              <td>{hotel.specification.Children}</td>
            </tr>
            <tr>
              <th>Business & Events</th>
              <td>{hotel.specification.BusinessEvents}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container border rounded mt-5">
        <table className="table" style={{ justifyItems: "center" }}>
          <thead>
            <tr style={{ fontSize: "25px" }}>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Review reviewSubmit={reviewSubmit} />
              </td>
            </tr>

            {hotel?.review.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>
                      <div className="ml-5">Rating: {item.rating}</div>
                      <div className="ml-5">{item.comment}</div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelDetail;
