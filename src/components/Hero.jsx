import { useEffect } from 'react';
import AvatarViewer from './AvatarViewer';

export default function Hero() {
  useEffect(() => {
    // Could trigger initial animation here if needed
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="canvas-container">
        <AvatarViewer />
      </div>
      <div className="hero-overlay">
        <h1>Hi, I'm Jana</h1>
        <p>Creative Technologist & Full-Stack Engineer</p>
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

