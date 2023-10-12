import React from 'react';
import './report.css';

const ReportsAndAnalytics = () => {
  // Sample data for reports and analytics
  const data = [
    { month: 'Jan', projects: 10, completed: 8, overdue: 2 },
    { month: 'Feb', projects: 12, completed: 10, overdue: 2 },
    { month: 'Mar', projects: 15, completed: 12, overdue: 3 },
    // Add more data entries as needed
  ];

  return (
    <div className="reports-analytics">
      <h2>Reports and Analytics</h2>
      <div className="chart-container">
        {/* Replace this comment with your custom chart or graph component */}
        {/* You can use popular charting libraries like Chart.js or D3.js */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Projects</th>
            <th>Completed</th>
            <th>Overdue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.month}</td>
              <td>{entry.projects}</td>
              <td>{entry.completed}</td>
              <td>{entry.overdue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsAndAnalytics;
