import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Portfolio</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/DaRaM1025/nexus-monorepo" target="_blank" rel="noreferrer"><h2>Nexus Monorepo</h2></a>
                <p>Monorepo-based Service-Based Architecture (SBA) for financial trading platforms, integrating external APIs (Alpaca, Stripe) with specialized microservices: identity management, regulatory compliance, market data aggregation, portfolio tracking, and trade execution. Supports multi-role access (Broker, Trader, Admin) with Ionic/Vite frontend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DaRaM1025/Metrical-Zone-of-Wines" target="_blank" rel="noreferrer"><h2>Metrical Zone of Wines</h2></a>
                <p>Full-stack wine analytics platform demonstrating polyglot persistence strategies. Combines Spring Boot backend with React frontend, leveraging both SQL (MySQL) and NoSQL (MongoDB) databases, automated migrations (Flyway), and infrastructure-as-code deployment (Terraform).</p>
            </div>
            <div className="project">
                <a href="https://github.com/DaRaM1025/ConverterAPIREST" target="_blank" rel="noreferrer"><h2>ConverterAPIREST</h2></a>
                <p>RESTful API service enabling multi-format file conversions (text, audio, video) built with Spring Boot. Implements JWT-based authentication ensuring secure file processing workflows with industry-standard security protocols.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DaRaM1025/proyectoGPC" target="_blank" rel="noreferrer"><h2>Proyecto GPC</h2></a>
                <p>Enterprise course and curriculum management platform for competitive programming at El Bosque University. Developed with JavaServer Faces (JSF) providing comprehensive course orchestration, content management, and student-instructor collaboration features.</p>
            </div>
            <div className="project">
                <a href="https://github.com/DaRaM1025/proyectoTemuC1" target="_blank" rel="noreferrer"><h2>Proyecto Temu C1</h2></a>
                <p>E-commerce platform implementation inspired by marketplace architecture (Temu-style). Built with JavaServer Faces (JSF) emphasizing multi-vendor product catalogs, transaction management, and scalable commerce operations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;