import React, { useState } from 'react';
import './ServiceDetails.css';

function ServiceDetails({ service, onBookNow }) {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleBookNow = () => {
    if (!showPaymentOptions) {
      setShowPaymentOptions(true);
    } else if (selectedPayment) {
      onBookNow(selectedPayment);
    }
  };

  const paymentMethods = [
    { id: 'credit', label: 'Credit Card' },
    { id: 'debit', label: 'Debit Card' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'upi', label: 'UPI' },
    { id: 'netbanking', label: 'Net Banking' }
  ];

  return (
    <div className="service-details">
      <h2>{service.name}</h2>
      <img src={service.image} alt={service.name} />
      <p>{service.description}</p>
      <p><strong>Duration:</strong> {service.duration}</p>
      <p><strong>Rating:</strong> {service.rating}</p>
      <p><strong>Quality:</strong> {service.quality}</p>
      
      {showPaymentOptions && (
        <div className="payment-options">
          <h3>Select Payment Method</h3>
          {paymentMethods.map(method => (
            <div key={method.id} className="payment-method">
              <input
                type="radio"
                id={method.id}
                name="payment"
                value={method.id}
                checked={selectedPayment === method.id}
                onChange={() => setSelectedPayment(method.id)}
              />
              <label htmlFor={method.id}>{method.label}</label>
            </div>
          ))}
        </div>
      )}

      <button 
        onClick={handleBookNow} 
        disabled={showPaymentOptions && !selectedPayment}
      >
        {showPaymentOptions ? 'Confirm Booking' : 'Book Now'}
      </button>
    </div>
  );
}

export default ServiceDetails;