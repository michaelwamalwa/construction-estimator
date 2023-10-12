import React from 'react';
import UserDashboard from './UserDashboard';
import ManagerDashboard from './ManagerDashboard';
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>User Dashboard</h3>
        <UserDashboard />
      </div>
      <div>
        <h3>Manager Dashboard</h3>
        <ManagerDashboard />
      </div>
    </div>
  );
}
export default Dashboard;
