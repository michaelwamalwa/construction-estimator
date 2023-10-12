import React, { useState } from 'react';
import './Collaboration.css';

function Collaboration() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [documents, setDocuments] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleAddMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage('');
    }
  };

  const handleAddDocument = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments((prevDocuments) => [...prevDocuments, file]);
    }
  };

  const handleTaskInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setAssignedTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleAssignTask = () => {
    // Perform task assignment logic here
  };

  return (
    <div className="collaboration-container">
      <div className="message-board">
        <h2>Collaboration and Communication</h2>
        <div className="message-list">
          {messages.map((message, index) => (
            <div className="message-item" key={index}>
              {message}
            </div>
          ))}
        </div>
        <label htmlFor="Type">
            Type Your message
        </label>
        <div className="message-input">
          <input
            type="text"
           
            value={newMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleAddMessage}>Send</button>
        </div>
      </div>
      <div className="document-sharing">
        <h3>Document Sharing</h3>
        <input type="file" onChange={handleAddDocument} />
        <ul>
          {documents.map((document, index) => (
            <li key={index}>{document.name}</li>
          ))}
        </ul>
      </div>

      <div className="task-assignment">
        <h3>Task Assignment and Tracking</h3>
        <input
          type="text"
          placeholder="Enter task description"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <button onClick={() => { handleAddTask(); handleAssignTask(); }}>Assign Task</button>
        <ul>
          {assignedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <div className="file-attachments">
        <h3>File Attachments</h3>
        <input type="file" onChange={handleFileSelection} />
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>
    </div>
  );
}

export default Collaboration;
