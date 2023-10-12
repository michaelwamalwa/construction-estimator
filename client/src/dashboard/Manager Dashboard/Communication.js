import React, { useState } from 'react';
import './Communication.css';

const CommunicationCollaboration = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New milestone achieved',
      description: 'Project milestone 1 has been completed.',
      timestamp: '2023-06-20 09:30 AM',
    },
    {
      id: 2,
      title: 'Project update',
      description: 'There is a change in the project timeline. Please review the updated schedule.',
      timestamp: '2023-06-21 02:15 PM',
    },
  ]);

const handleNotificationClick = (notificationId) => {
    // Find the clicked notification by id
const clickedNotification = notifications.find((notification) => notification.id === notificationId);
// Filter out the clicked notification from the notifications array
const updatedNotifications = notifications.filter((notification) => notification.id !== notificationId);
setNotifications(updatedNotifications);
    // Update the notification (e.g., mark as read, open details, etc.)
    console.log(`Notification ${notificationId} clicked.`);
    console.log(clickedNotification);
  };

      const renderNotifications = () => {//Returns a jsx element that represents a list of notifications
         return (
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification) => (//iterate over the notifications array and generate a JSX element for each notification
          <div key={notification.id} className="notification" onClick={() => handleNotificationClick(notification.id)}>
            <h4>{notification.title}</h4>
            <p>{notification.description}</p>
            <span>{notification.timestamp}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderMessagingIntegration = () => {
    return (
      <div className="messaging-integration">
        <h3>Messaging Integration</h3>
        <p>Integrate with your messaging platform or communication tool here.</p>
      </div>
    );
  };

  return (
    <div className="communication-collaboration">
      <h2>Communication and Collaboration</h2>
      {renderNotifications()}
      {renderMessagingIntegration()}
    </div>
  );
};

export default CommunicationCollaboration;
