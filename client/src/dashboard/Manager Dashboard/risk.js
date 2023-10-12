import React, { useState } from 'react';
import './risk.css';

const RiskManagement = () => {
  const [risks, setRisks] = useState([
    { id: 1, name: 'Material Deficit', likelihood: 'High', impact: 'Medium', status: 'Open' },
    { id: 2, name: 'LAbour unpaid', likelihood: 'Medium', impact: 'Low', status: 'Open' },
    { id: 3, name: 'Management improvement', likelihood: 'Low', impact: 'High', status: 'Closed' },
  ]);

  const updateRiskStatus = (riskId, newStatus) => {
    const updatedRisks = risks.map((risk) => {
      if (risk.id === riskId) {
        return { ...risk, status: newStatus };
      }
      return risk;
    });
    setRisks(updatedRisks);
  };

  return (
    <div className="risk-management">
      <h2>Risk Management</h2>
      <table>
        <thead>
          <tr>
            <th>Risk</th>
            <th>Likelihood</th>
            <th>Impact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.name}</td>
              <td>{risk.likelihood}</td>
              <td>{risk.impact}</td>
              <td>{risk.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Risk assessment and mitigation strategies */}
      {/* Replace this comment with your risk assessment and mitigation strategies component */}
      <p><button onClick={() => updateRiskStatus(1, 'Closed')}>
        Update Risk 1 Status to Closed
      </button></p>
     <p><button onClick={() => updateRiskStatus(2, 'Closed')}>
        Update Risk 2 Status to Closed
      </button></p>
     <p><button onClick={() => updateRiskStatus(3, 'Closed')}>
        Update Risk 3 Status to Open
      </button></p>
    </div>
  );
};

export default RiskManagement;
