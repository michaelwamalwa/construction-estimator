import React, { useState } from 'react';
import './UserManagement.css';

function UserManagement() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'en',
  });

  const handleInputChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSaveSettings = () => {
    // Save user settings here
    console.log('User settings:', settings);
  };

  return (
    <div className="user-management-container">
      <div className="user-settings">
        <h2>User Settings</h2>
        
          <div>
            <div className="setting-item">
              <label htmlFor="darkMode">Dark Mode</label>
              <input
                type="checkbox"
                id="darkMode"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleInputChange}
              />
            </div>
            <div className="setting-item">
              <label htmlFor="notifications">Notifications</label>
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleInputChange}
              />
            </div>
            <div className="setting-item">
              <label htmlFor="language">Language</label>
              <select
                id="language"
                name="language"
                value={settings.language}
                onChange={handleInputChange}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <button onClick={handleSaveSettings}>Save Settings</button>
          </div>
      </div>
    </div>
  );
}

export default UserManagement;
