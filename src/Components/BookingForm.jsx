import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ service, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    price: '',
    time: '',
    serviceName: service.name
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="booking-form-container">
      <h2>Book {service.name}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile No" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="price" placeholder="Price" onChange={handleChange} required />
        <input name="time" placeholder="Preferred Time" onChange={handleChange} required />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
