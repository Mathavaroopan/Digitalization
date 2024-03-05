import React, { useState } from 'react';
import { UserData } from '../data';
import ProgressBox from './ProgressBox';
import './ProjectsTracking.css';

function ProjectsTracking() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((project, index) => (
            <tr key={index}>
              <td>{project.project_name}</td>
              <td>
                <button onClick={() => setSelectedProject(project)}>View Progress</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProject && <ProgressBox project = {selectedProject} />}
    </div>
  );
}

export default ProjectsTracking;
