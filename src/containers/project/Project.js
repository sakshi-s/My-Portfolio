import React from 'react';
import './Project.css';
import ProjectCard from '../../components/projectcard/ProjectCard';
import { projectInfo } from '../../portfolio';

export default function Project() {
  return (
    <div className="education-section" id="education">
        <h1 className="education-heading">Projects</h1>
        <div className="education-card-container">
          {projectInfo.schools.map((school) => (
            <ProjectCard school={school} />
          ))}
        </div>
    </div>
  );
}
