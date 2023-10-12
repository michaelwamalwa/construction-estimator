import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './MyProjects.css';

function CreateProject() {
  const [formState, setFormState] = useState({
    projectname: "",
    projecttype: "",
    projectdescription: "",
    estimatedbudget: 0,
    projectstatus: "",
    priority: "",
    startDate: '',
  });

  const [createdProject, setCreatedProject] = useState(null);
  const [projects, setProjects] = useState([]);
 
 const handleAddProject = () => {
  const newProject = {...formState };
setProjects([...projects, newProject]);
  // Clear the form fields
  setFormState({
    projectname: "",
    projecttype: "",
    projectdescription: "",
    estimatedbudget: 0,
    projectstatus: "",
    priority: "",
    startDate: "",
  });
};
  //Delete functionality
  const handleDeleteProject = (index) => {
    setProjects(prevProjects =>
   prevProjects.filter((_, i) => i !== index));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server to create new project
    fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         //set the created project
         setCreatedProject(data);
        // Clear form after creating project
        setFormState({
          projectname: "",
          projectdescription: "",
          estimatedbudget: 0,
          projectstatus: "",
          priority: "",
          startDate: "",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="create-project-container">
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name:</label>
        <input
          type="text"
          id="name"
          name="projectname"
          required
          value={formState.projectname}
          onChange={handleInputChange}
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formState.startDate}
          onChange={handleInputChange}
          placeholder="Start Date"
        />
          <label htmlFor="description">Project Description: <br />
         <small>  description.</small></label>
         <textarea
       id="description"
       name="projectdescription"
       value={formState.projectdescription}
       onChange={handleInputChange}
       required  
/> 

        <label htmlFor="budget">Estimated Budget (in ksh):</label>
        <input
          type="number"
          id="budget"
          name="estimatedbudget"
          value={formState.estimatedbudget}
          onChange={handleInputChange}
          required
        />
        <span className="input-suffix">KES</span>
        <div className="select-options">
          <label htmlFor="status">Project Status:</label>
          <select
            id="status"
            name="projectstatus"
            value={formState.projectstatus}
            onChange={handleInputChange}
            required>
            <option value="">--Select--</option>
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <button onClick={handleAddProject} type="submit">
          Create Project
          </button>
        <Link  
        style={{
           textDecoration: 'none',
            color: 'white', 
            fontSize: '14px',
            alignItems: 'center', 
            gap: '1.5rem',
            textAlign:"center"
             }} 
             to="/userdash"
             >
              GO BACK
          </Link>
      </form>

      {createdProject && (
        <div className="project-result">
          <h2>Created Project:</h2>
          <p>Project Name: {createdProject.projectname}</p>
          <p>Project Description: {createdProject.projectdescription}</p>
          <p>Estimated Budget: {createdProject.projectestimatedbudget}</p>
         </div>
      )}

   <div className="projects-list">
    {projects.map((project, index) => (
      <div className="project-list" key={index}>
          <p>{project.projectname}</p>
          <p>{project.projectdescription}</p>
          <p>{project.estimatedbudget}</p>
      <button onClick={() => handleDeleteProject(index)}>
        Delete Project
        </button>
      </div>
    ))}
   </div>
    </div>
  );
}

export default CreateProject;