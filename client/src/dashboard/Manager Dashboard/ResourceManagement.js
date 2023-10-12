import React, { useState } from 'react';
import './Resource.css'
const ResourceManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', status: 'In Progress', deadline: '2023-06-25' },
    { id: 2, name: 'Task 2', status: 'Completed', deadline: '2023-06-28' },
    { id: 3, name: 'Task 3', status: 'Not Started', deadline: '2023-07-05' },
  ]);

  // Function to update the status of a task
  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="resource-management">
      <h2>Resource Management</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.deadline}</td>
              <td>
                <button onClick={() => updateTaskStatus(task.id, 'Completed')}>Complete</button>
                <button onClick={() => updateTaskStatus(task.id, 'In Progress')}>In Progress</button>
                <button onClick={() => updateTaskStatus(task.id, 'Not Started')}>Not Started</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceManagement;
