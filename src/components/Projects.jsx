import React from 'react'

export default function Projects() {
  const projects = [
    { title: "Healthcare Data Classification", desc: "1st place Kaggle competition, ML + PCA + PSO." },
    { title: "Social Media Sentiment Analysis", desc: "BERT, PyTorch, Optuna." },
    { title: "SmartNotes", desc: "AI‑powered transcription & summarisation." },
    { title: "Firoza", desc: "3D jewellery e‑commerce with virtual try‑on." }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

