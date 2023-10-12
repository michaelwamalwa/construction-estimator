import React from 'react';
import './ReportComponent.css';

const Report = () => {
  const reportData = [
    { id: 1, name: 'Ochi John', project: 'Project A', cost: 'KES10,000' },
    { id: 2, name: 'Kate Anindo', project: 'Project B', cost: 'KES15,000' },
    { id: 3, name: 'David Omollo', project: 'Project C', cost: 'KES12,500' },
    { id: 4, name: 'Emily Shikwekwe', project: 'Project D', cost: 'KES8,200' },
  ];

  return (
    <div className="report-container">
      <h2 className="report-title">Construction Estimator Report</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Project</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.project}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
