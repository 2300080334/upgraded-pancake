import React, { useState } from 'react';
import Header from './Components/Header';
import Login from './Login';
import Signup from './Components/SignUp';
import Services from './Components/Services';
import ServiceDetails from './Components/ServiceDetails';
import BookingForm from './Components/BookingForm';
import BookingConfirmation from './Components/BookingConfirmation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleLogin = (username, password) => {
    const users = [
      { username: '2300080334', password: '123' },
      { username: '2300090258', password: '123' }
    ];
    const isValid = users.some(user => user.username === username && user.password === password);
    if (isValid) {
      setIsLoggedIn(true);
      setShowSignup(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (newUser) => {
    alert(`Account created for ${newUser.username}`);
    setShowSignup(false);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsBookingConfirmed(false);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (data) => {
    setBookingDetails(data);
    setIsBookingConfirmed(true);
    setSelectedService(null);
    setShowBookingForm(false);
  };

  return (
    <>
      {/* Show Header only after login */}
      {isLoggedIn && <Header />}

      {/* Login or Signup view */}
      {!isLoggedIn ? (
        showSignup ? (
          <Signup 
            onSignupSuccess={() => setShowSignup(false)} 
            onLoginClick={() => setShowSignup(false)} 
          />
        ) : (
          <Login 
            onLogin={handleLogin} 
            onSignupClick={() => setShowSignup(true)} 
          />
        )
      ) : isBookingConfirmed ? (
        <BookingConfirmation bookingDetails={bookingDetails} />
      ) : showBookingForm ? (
        <BookingForm service={selectedService} onSubmit={handleBookingSubmit} />
      ) : selectedService ? (
        <ServiceDetails service={selectedService} onBookNow={handleBookNow} />
      ) : (
        <Services onServiceClick={handleServiceClick} />
      )}
    </>
  );
}

export default App;
