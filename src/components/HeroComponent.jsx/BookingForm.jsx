import React from "react";
import '../../Style/header.css'

function BookingForm() {
  return (
    <div className="booking-form">
      <div className="form-item">
        <label>CHECK-IN</label>
        <input type="date" />
      </div>
      <div className="form-item">
        <label>CHECK-OUT</label>
        <input type="date" />
      </div>
      <div className="form-item">
        <label>ROOMS</label>
        <select>
          <option>Suite</option>
          <option>Deluxe</option>
          <option>Standard</option>
        </select>
      </div>
      <div className="form-item">
        <label>GUESTS</label>
        <select>
          <option>1 Person</option>
          <option>2 Persons</option>
          <option>3+ Persons</option>
        </select>
      </div>
      <button className="availability-btn">Check Availability</button>
    </div>
  );
}

export default BookingForm;
