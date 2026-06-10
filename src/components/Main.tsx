import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DaRaM1025" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/davidramirez-javasoftarch/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>David Santiago Ramírez Arévalo</h1>
          <p>Systems Engineering Student · Software Architect · Backend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/DaRaM1025" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/davidramirez-javasoftarch/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;