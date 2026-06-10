import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h1>About Me</h1>

        <div className="about-grid">
          <div className="about-card">
            <h2>Backend Engineering</h2>
            <p>
              <strong>Spring Boot developer with 3+ years of experience</strong> building secure, scalable systems with Java, APIs, automation, and Linux-based operations.
            </p>
          </div>

          <div className="about-card">
            <h2>Systems Thinking</h2>
            <p>
              I analyze every artifact through a <strong>biopsychosocial and cultural lens</strong>, asking how it interacts with human, social, and organizational systems.
            </p>
          </div>

          <div className="about-card">
            <h2>Quality Commitment</h2>
            <p>
              Scalability, maintainability, and security are treated as <strong>commitments to users, teams, and communities</strong>, not isolated technical checkboxes.
            </p>
          </div>

          <div className="about-card metrics-card">
            <h2>Measured Impact</h2>
            <div className="metrics-list">
              <p><strong>40%</strong> fewer security vulnerabilities.</p>
              <p><strong>80%</strong> of critical events audited.</p>
              <p><strong>70%</strong> lower risk through design-first decisions.</p>
            </div>
          </div>

          <div className="about-card">
            <h2>Current Focus</h2>
            <p>
              Work centered on <strong>EDA, Kubernetes, CI/CD, observability, and risk reduction</strong>, turning architecture decisions into operational value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
