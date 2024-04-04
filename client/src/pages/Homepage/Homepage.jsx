import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'
import Footer from '../../components/other/navbar/Footer';
import Navbar from 'react-navbar/dist/Navbar';

function HomePage() {
  return (
    <>
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="title">Blockchain Virtual Lab</h1>
          <p className="subtitle">Experience the Future of Trust</p>
          <Link to="/experiments" className="btn btn-primary">Start Exploring</Link>
        </div>
      </header>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">What is Blockchain?</h2>
          <p className="section-text">
            Blockchain is a revolutionary technology that allows for secure, transparent, and decentralized transactions.
            Our virtual lab offers a hands-on approach to learning blockchain through interactive experiments.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-cubes feature-icon"></i>
              <h3 className="feature-title">Blockchain Basics</h3>
              <p className="feature-text">Learn the fundamental concepts of blockchain, including blocks, chains, and hashing.</p>
            </div>
            <div className="feature">
              <i className="fas fa-file-contract feature-icon"></i>
              <h3 className="feature-title">Smart Contracts</h3>
              <p className="feature-text">Explore smart contracts, self-executing contracts with predefined conditions.</p>
            </div>
            <div className="feature">
              <i className="fas fa-globe feature-icon"></i>
              <h3 className="feature-title">Decentralized Applications</h3>
              <p className="feature-text">Dive into the world of decentralized applications (DApps) and their benefits.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        
        <p>&copy; 2024 Blockchain Virtual Lab</p>
      </footer>
    </div>
    </>
  );
}

export default HomePage;
