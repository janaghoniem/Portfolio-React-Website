import React, { useEffect } from 'react';
import Avatar3D from './AvatarViewer';
import './Hero.css';

export default function Hero({ setAnim }) {
  useEffect(() => {
    setAnim('wave'); // wave on load
  }, [setAnim]);

  return (
    <section id="hero" className="hero-section">
      <div className="canvas-container">
        <Avatar3D />
      </div>
      <div className="hero-overlay">
        <h1>Hi, I'm Jana</h1>
        <p>Creative Technologist & Full‑Stack Engineer</p>
        <div>
          <button className="cta" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <button className="cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
