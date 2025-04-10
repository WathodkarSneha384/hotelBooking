import React, { useState } from "react";
import HotelCard from "../BodyComponent.jsx/HotelCard";
import hotels from "../../database/hotel_card_data";
import '../../Style/header.css';
import Slider from "react-slick";

function BookingForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState("1 Room");
  const [guests, setGuests] = useState("1 Person");
  const [showHotels, setShowHotels] = useState(false);
  

  const handleCheckAvailability = () => {
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    // You can add API call or logic here
    alert(`Checking availability for:\n
      Check-in: ${checkIn}\n
      Check-out: ${checkOut}\n
      Rooms: ${rooms}\n
      Guests: ${guests}`);

      setShowHotels(true);
  };

  return (
    <div>
    <div className="booking-form">
      <div className="form-item">
        <label>CHECK-IN</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>
      <div className="form-item">
        <label>CHECK-OUT</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>
      <div className="form-item">
        <label>ROOMS</label>
        <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
          <option>1 Room</option>
          <option>2 Room</option>
          <option>3+ Room</option>
        </select>
      </div>
      <div className="form-item">
        <label>GUESTS</label>
        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option>1 Person</option>
          <option>2 Persons</option>
          <option>3+ Persons</option>
        </select>
      </div>
      <button className="availability-btn" onClick={handleCheckAvailability}>
        Check Availability
      </button>
    </div>

    {showHotels && (
  <div className="hotel-slider">
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={3} // Show 3 cards at once
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 }
        }
      ]}
    >
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </Slider>
  </div>
)}
    </div>
  );
}

export default BookingForm;
