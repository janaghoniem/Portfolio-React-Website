import React from 'react'

export default function Skills() {
  const skills = [
    "Java", "Python", "C/C++", "SQL", "JavaScript/TypeScript", "HTML/CSS", "PHP",
    "React", "Node.js", "Express", "Meteor", "JavaFX",
    "TensorFlow", "PyTorch", "Scikit‑learn", "Pandas", "NumPy"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <span key={i} className="skill-badge">{s}</span>
        ))}
      </div>
    </section>
  );
}

