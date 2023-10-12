import React, { useState, useEffect } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch notifications
    fetchNotifications()
      .then((data) => setNotifications(data))
      .catch((error) => console.error('Error fetching notifications:', error));
  }, []);

  const fetchNotifications = () => {
    // Simulating API call to fetch notifications
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const notificationsData = [
          { id: 1, title: 'Project Update', message: 'New updates on Project A' },
          { id: 2, title: 'Deadline Reminder', message: 'Project B deadline approaching' },
          { id: 3, title: 'Task Assigned', message: 'You have been assigned a new task' },
        ];
        resolve(notificationsData);
      }, 1000);
    });
  };

  const handleDismiss = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications and Reminders</h2>
      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li className="notification-item" key={notification.id}>
              <div className="notification-content">
                <h3 className="notification-title">{notification.title}</h3>
                <p className="notification-message">{notification.message}</p>
              </div>
              <button className="dismiss-button" onClick={() => handleDismiss(notification.id)}>
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
