import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2026 – May 2026"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Telstra International Philippines — Makati, NCR</h4>
            <p>
              Built Power Apps and automated workflows with Power Automate; created Power BI dashboards to streamline Customer Service operations.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2026"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Top 10 Finalist — Health & Well-being</h3>
            <h4 className="vertical-timeline-element-subtitle">National Innovation Day 2026 — Manila</h4>
            <p>
              Presented an AI-assisted rehabilitation system; ranked Top 10 nationwide in Health & Well-being.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CTF Participant</h3>
            <h4 className="vertical-timeline-element-subtitle">Hexcore Labs — Makati, NCR</h4>
            <p>
              Participated in a national cybersecurity Capture The Flag — focus on threat analysis and team-based problem solving.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 – 2026"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BS Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Technological University of the Philippines — Taguig</h4>
            <p>
              This is where I learned and honed most of my technology skills through coursework and hands-on projects, culminating in the CVAPed capstone (AI-assisted rehabilitation system).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;