import React from 'react';
import ServiceCard from './components/ServiceCard'; // Adjusted the path to ServiceCard based on folder structure
import './home.css'; // Custom styles for Home

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>Here you can add services and other content.</p>
      <ServiceCard
        service={{
          name: 'Cleaning',
          description: 'Home cleaning service',
          image: '/images/cleaning.jpg' // Correct path assuming the images are in the public folder
        }}
      />
    </div>
  );
}

export default Home;
