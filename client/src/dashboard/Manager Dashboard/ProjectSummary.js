import React, { useState } from 'react';
import './ProjectSummary.css';

function ProjectSummary() {//main functional component
//state variables to store project information and milestones
  const [projectStatus, setProjectStatus] = useState('');//store project status
  const [projectDeadline, setProjectDeadline] = useState('');//store project deadline
  const [milestones, setMilestones] = useState([]);//store milestones
  const [newMilestone, setNewMilestone] = useState('');//stpre new milestone name
  const [newMilestoneDate, setNewMilestoneDate] = useState('');//store new milestone date
  const [output, setOutput] = useState('');//store output text

  //handler for changing project status
  const handleProjectStatusChange = (e) => {
    setProjectStatus(e.target.value);
  };
//handler for changing project deadline
  const handleProjectDeadlineChange = (e) => {
    setProjectDeadline(e.target.value);
  };
//handler for changing existing milestone name
  const handleMilestoneChange = (e, index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index].name = e.target.value;
    setMilestones(updatedMilestones);
  };
//handler for changing milestone date
  const handleMilestoneDateChange = (e, index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index].date = e.target.value;
    setMilestones(updatedMilestones);
  };
//handler for adding a new mileston
  const handleAddMilestone = () => {
    if (newMilestone.trim() !== '') {
      const milestone = { name: newMilestone, date: newMilestoneDate };
      setMilestones((prevMilestones) => [...prevMilestones, milestone]);
      setNewMilestone('');
      setNewMilestoneDate('');
    }
  };
// handle for removing a new milestone
  const handleRemoveMilestone = (index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones.splice(index, 1);
    setMilestones(updatedMilestones);
  };
//handler for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Constructing the output text to display project information
    const outputText = `Project Status: ${projectStatus}\nProject Deadline: ${projectDeadline}\n\nMilestones:\n${milestones
      .map((milestone) => `${milestone.name} - ${milestone.date}`)
      .join('\n')}`;
    setOutput(outputText);
  };

  return (
    <div className="project-summary-container">
      <h2>Project Summary</h2>
      <form onSubmit={handleSubmit}>
        <div className="project-status">
          <label htmlFor="status">Project Status:</label>
          <select id="status" value={projectStatus} onChange={handleProjectStatusChange}>
            <option value="">-- Select Status --</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="project-deadline">
          <label htmlFor="deadline">Project Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={projectDeadline}
            onChange={handleProjectDeadlineChange}
          />
        </div>
        <div className="project-milestones">
          <h3>Milestones:</h3>
          {milestones.map((milestone, index) => (
            <div key={index} className="milestone-item">
              <label htmlFor={`milestone-name-${index}`}><strong>Milestone Name:</strong></label>
              <input
                type="text"
                id={`milestone-name-${index}`}
                value={milestone.name}
                onChange={(e) => handleMilestoneChange(e, index)}
              />
              <label htmlFor={`milestone-date-${index}`}><strong>Milestone Date:</strong></label>
              <input
                type="date"
                id={`milestone-date-${index}`}
                value={milestone.date}
                onChange={(e) => handleMilestoneDateChange(e, index)}
              />
              <button type="button" onClick={() => handleRemoveMilestone(index)}>
                Remove
              </button>
            </div>
          ))}
          <div className="milestone-item">
            <label htmlFor='milestonename'>
              Milestone Name
            </label>
            <input
              type="text"
              placeholder="Milestone name"
              value={newMilestone}
              onChange={(e) => setNewMilestone(e.target.value)}
            />
                 <label htmlFor='milestonedate'>
              Milestone date
            </label>
            <input
              type="date"
              value={newMilestoneDate}
              onChange={(e) => setNewMilestoneDate(e.target.value)}
            />
            <button type="button" onClick={handleAddMilestone}>
              Add Milestone
            </button>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default ProjectSummary;
