import React from 'react';
import './ServiceCard.css';

function ServiceCard({ service, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <img src={service.image} alt={service.name} className="service-image" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
}

export default ServiceCard;
