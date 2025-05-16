import React from 'react';
import './BookingConfirmation.css';

function BookingConfirmation({ bookingDetails }) {
  return (
    <div className="booking-confirmation-container">
      <h1>Your Booking is Successful!</h1>
      <div className="booking-details">
        <h3>Booking Details:</h3>
        <p><strong>Name:</strong> {bookingDetails.name}</p>
        <p><strong>Email:</strong> {bookingDetails.email}</p>
        <p><strong>Mobile:</strong> {bookingDetails.mobile}</p>
        <p><strong>Address:</strong> {bookingDetails.address}</p>
        <p><strong>Service:</strong> {bookingDetails.serviceName}</p>
        <p><strong>Price:</strong> {bookingDetails.price}</p>
        <p><strong>Preferred Time:</strong> {bookingDetails.time}</p>
      </div>
    </div>
  );
}

export default BookingConfirmation;
