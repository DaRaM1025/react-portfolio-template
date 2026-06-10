import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Spring Security",
    "Microservices",
    "API-First Design",
    "REST APIs",
    "Maven",
    "SOLID Principles",
    "Design Patterns"
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "Linux",
    "Bash",
    "GitHub Actions",
    "CI/CD Pipelines",
    "SonarCloud",
    "Infrastructure as Code",
    "Systems Administration"
];

const labelsThird = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "PL/SQL",
    "RabbitMQ",
    "Apache Kafka",
    "Event-Driven Architecture",
    "Polyglot Persistence",
    "BPMN"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Backend & Microservices</h3>
                    <p>I specialize in building scalable, resilient microservices using Java and Spring Boot. My focus is on service-based architecture, API-first design, and implementing SOLID principles with comprehensive architectural documentation (UML, C4, ADRs).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Infrastructure & DevOps</h3>
                    <p>I design and implement containerized infrastructures using Docker and Kubernetes. Proficient in Linux systems administration, CI/CD automation with GitHub Actions, and infrastructure-as-code principles for production-grade deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCubes} size="3x"/>
                    <h3>Database & Event-Driven Architecture</h3>
                    <p>Expert in polyglot persistence strategies, combining SQL and NoSQL databases. Implementing Event-Driven Architecture (EDA) with RabbitMQ and Apache Kafka for asynchronous, scalable systems with strong consistency models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;