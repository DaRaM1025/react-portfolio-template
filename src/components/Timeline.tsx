import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Systems Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">El Bosque University, Bogotá, Colombia</h4>
            <p>
              Focus: Software Architecture, Microservices, Systems Thinking. Biopsychosocial and cultural framework for system design.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Now"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Developer & Software Architect</h3>
            <h4 className="vertical-timeline-element-subtitle">Java/Spring Ecosystem</h4>
            <p>
              Microservices with Spring Cloud, Event-Driven Architecture (EDA), Containerization with Docker & Kubernetes, CI/CD Automation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="In Progress"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Event-Driven Architecture (EDA)</h3>
            <h4 className="vertical-timeline-element-subtitle">RabbitMQ & Apache Kafka</h4>
            <p>
              Building asynchronous, scalable systems with event streaming. Moving toward production-grade message-driven architectures.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Learning"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Advanced Infrastructure & DevOps</h3>
            <h4 className="vertical-timeline-element-subtitle">Kubernetes, CDN & API Gateway Design</h4>
            <p>
              Cloud-native architectures, container orchestration, and infrastructure-as-code. Aiming for production-grade deployment pipelines.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;