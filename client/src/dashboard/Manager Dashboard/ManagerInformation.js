import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManagerInformation.css'; // Import the CSS file

const ManagerInformation = () => {
  // Define state variables
  const [managerInfo, setManagerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch manager information from the server
  const fetchManagerInfo = () => {
    setError(null); // Reset the error state before fetching
    setLoading(true); // Ensure loading state is true when fetching
    axios
      .get('http://localhost:5000/manager-info')
      .then(response => {
        setManagerInfo(response.data); // Update the state with the retrieved data
        setLoading(false);
      })
      .catch(error => {
        // Handle different types of errors
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          const message = error.response.data.message || 'Failed to fetch Manager information';
          setError(message);
        } else if (error.request) {
          // The request was made but no response was received
          setError('No response was received from the server');
        } else {
          // Something else caused the request to fail
          setError('An unexpected error occurred');
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchManagerInfo();
  }, []);

  return (
    <div className="manager-info">
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
