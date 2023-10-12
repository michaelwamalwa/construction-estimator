import React, { useState } from 'react';

const TaskWorkflowManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'MAterial arrival', status: 'In Progress', deadline: '2023-06-25' },
    { id: 2, name: 'MAterial REtrieval', status: 'Completed', deadline: '2023-06-28' },
    { id: 3, name: 'Labour ', status: 'Not Started', deadline: '2023-07-05' },
  ]);

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
    <div className="task-workflow-management">
      <h2>Task and Workflow Management</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Action</th> {/* New column for action */}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.deadline}</td>
              <td>
                <button onClick={() => updateTaskStatus(task.id, 'Completed')}>
                  Mark as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Progress indicators or Gantt chart visualization */}
      {/* Replace this comment with your progress indicators or Gantt chart component */}
    </div>
  );
};

export default TaskWorkflowManagement;
