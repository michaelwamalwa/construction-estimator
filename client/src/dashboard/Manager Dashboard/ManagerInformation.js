import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManagerInformation.css'; // Import the CSS file

const ManagerInformation = () => {
  // Define state variables
  const [managerInfo, setManagerInfo] = useState(null); // Updated state initialization
  const [loading, setLoading] = useState(true); // Initial loading state
  const [error, setError] = useState(null);

  // Fetch manager information from the server
  const fetchManagerInfo = () => {
    setError(null);
    // Send a GET request to retrieve manager information from the server
    axios
      .get('/managers')
      .then(response => {
        // If the request is successful, update the state with the retrieved data
        setManagerInfo(response.data);
        setLoading(false);
      })
      .catch(error => {
        // If an error occurs, set the error state with a message and stop loading
        setError('Failed to fetch Manager information');
        setLoading(false);
      });
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchManagerInfo();
  }, []);

  return (
    <div className="manager-info">
      {/* Display manager's personal information */}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {managerInfo && (
        <div>
          <h3>Personal Information</h3>
          <p>Username: {managerInfo.username}</p>
          <p>Email: {managerInfo.email}</p>
          <p>Phone: {managerInfo.phone}</p>
        </div>
      )}
      <button className="retry-button" onClick={fetchManagerInfo}>
        Retry
      </button>
    </div>
  );
};

export default ManagerInformation;
