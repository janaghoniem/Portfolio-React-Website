import React from 'react'

export default function Header() {
  return (
    <header className="header" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 10
    }}>
      <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(90deg, var(--mint), var(--lavender))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Jana Ghoniem
      </h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}