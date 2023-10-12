import React, { useState } from 'react';
import './ProjectManagement.css';


function ProjectManagement() {
  // Task Management
  const availability = ['Full-time', 'Part-time', 'Limited'];
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    taskName: '',
    startDate: '',
    endDate: '',
    assignedResources: [],
    dependencies: []
  });

  const handleTaskInputChange = (field, value) => {
    setNewTask(prevTask => ({
      ...prevTask,
      [field]: value
    }));
  };

  const handleAddTask = () => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTask({
      taskName: '',
      startDate: '',
      endDate: '',
      assignedResources: [],
      dependencies: []
    });
  };

  const handleDeleteTask = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  // Gantt Chart
  // Implement Gantt chart functionality using a library or custom implementation

  // Resource Management
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({
    resourceName: '',
    role: '',
    availability: ''
  });

  const handleResourceInputChange = (field, value) => {
    setNewResource(prevResource => ({
      ...prevResource,
      [field]: value
    }));
  };

  const handleAddResource = () => {
    setResources(prevResources => [...prevResources, newResource]);
    setNewResource({
      resourceName: '',
      role: '',
      availability: ''
    });
  };
   const handleDeleteResource = (index) => {
    setResources(prevResources => prevResources.filter((_, i) => i !== index));
  };

  return (
    <div className="project-management-container">
      <div className="task-management">
        <h2>Task Management</h2>
        <div className="task-form">
        <label htmlFor="Task Name">
           Task Name
          </label>
          <input
            type="text"
            placeholder="Task Name"
            value={newTask.taskName}
            onChange={(e) => handleTaskInputChange('taskName', e.target.value)}
          />
            <label htmlFor="Start Date">
           Start Date
          </label>
          <input
            type="date"
            value={newTask.startDate}
            onChange={(e) => handleTaskInputChange('startDate', e.target.value)}
          />
          <label htmlFor="End Date">
           End Date
          </label>
          <input
            type="date"
            placeholder="End Date"
            value={newTask.endDate}
            onChange={(e) => handleTaskInputChange('endDate', e.target.value)}
          />
          {/* Input fields for assigned resources and dependencies */}
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-item" key={index}>
              <p>{task.taskName}</p>
              <p>{task.startDate} - {task.endDate}</p>
              {/* Display assigned resources and dependencies */}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <div className="resource-management">
        <h2>Resource Management</h2>
        <div className="resource-form">
          <label htmlFor="Resource Name">
            Resource Name
          </label>
          <input
            type="text"
            placeholder="Resource Name"
            value={newResource.resourceName}
            onChange={(e) => handleResourceInputChange('resourceName', e.target.value)}
          />
          <label htmlFor="Role">
           Role
          </label>
          <input
            type="text"
            placeholder="Role"
            value={newResource.role}
            onChange={(e) => handleResourceInputChange('role', e.target.value)}
          />
          <label htmlFor=" Availability"> Availability</label>
          <select
          value={newResource.availability}
          onChange={(e) => handleResourceInputChange('availability', e.target.value)}
          >
            <option value="">Select Availability</option>
            {availability.map((availability, index) => (
              <option key={index} value={availability}>{availability}</option>
            ))}
          </select>
          <button onClick={handleAddResource}>Add Resource</button>
        </div>
        <div className="resource-list">
          {resources.map((resource, index) => (
            <div className="resource-item" key={index}>
              <p>{resource.resourceName}</p>
              <p>{resource.role}</p>
              <p>{resource.availability}</p>
              <button onClick={() => handleDeleteResource(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectManagement;
