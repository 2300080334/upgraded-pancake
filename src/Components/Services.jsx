import React from 'react';
import ServiceCard from '../Components/ServiceCard'; // Ensure the path is correct
import './Services.css';

// Updated services list with duration, rating, and quality
const servicesList = [
  {
    name: 'House Cleaning',
    description: 'Professional cleaning service',
    image: '/images/housecleaning.jpg',
    duration: '2 hours',
    rating: '4.5/5',
    quality: 'High',
  },
  {
    name: 'Plumbing',
    description: 'Fix all your leaks and clogs',
    image: '/images/plumbing.jpg',
    duration: '1.5 hours',
    rating: '4.2/5',
    quality: 'Medium',
  },
  {
    name: 'Electrical Services',
    description: 'Installation and repair',
    image: '/images/electrical.jpg',
    duration: '2 hours',
    rating: '4.6/5',
    quality: 'High',
  },
  {
    name: 'AC Maintenance',
    description: 'Keep your AC running smoothly',
    image: '/images/acrepair.jpg',
    duration: '2.5 hours',
    rating: '4.3/5',
    quality: 'High',
  },
];

function Services({ onServiceClick }) {
  return (
    <div className="services-container">
      <h1 className="welcome-text">
        Welcome to <span style={{ color: '#007bff' }}>HomeServe</span>
      </h1>
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onClick={() => onServiceClick(service)}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
