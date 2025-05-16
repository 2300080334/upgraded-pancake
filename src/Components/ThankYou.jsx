import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYouPage.css';

function ThankYouPage() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="thank-you-header">
          <div className="thank-you-icon">❤️</div>
          <h1>Thank You for Your Booking!</h1>
        </div>
        
        <div className="thank-you-content">
          <p>We truly appreciate your trust in our services. Your booking has been confirmed and our team is preparing to serve you.</p>
          
          <div className="next-steps">
            <h2>What Happens Next?</h2>
            <ul>
              <li>You'll receive a confirmation email with all details</li>
              <li>Our service professional will contact you before your appointment</li>
              <li>You'll receive reminders as your service date approaches</li>
            </ul>
          </div>

          <div className="contact-info">
            <h2>Our Contact Information</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <span>24/7 Support: 1800-123-4567</span>
              </div>
              <div className="contact-method">
                <span className="contact-icon">✉️</span>
                <span>Email: support@homeserve.com</span>
              </div>
              <div className="contact-method">
                <span className="contact-icon">🕒</span>
                <span>Business Hours: 8AM - 8PM, 7 days a week</span>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/" className="home-button">
            Return to Home
          </Link>
          <Link to="/services" className="services-button">
            Browse More Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;