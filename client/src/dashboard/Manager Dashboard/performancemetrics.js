import React from 'react';
import './performance.css';

const PerformanceMetrics = () => {
  // Mock data for performance metrics
  const kpis = [
    { id: 1, name: 'Productivity', value: 85, target: 90 },
    { id: 2, name: 'Efficiency', value: 75, target: 80 },
    { id: 3, name: 'Quality', value: 90, target: 95 },
  ];

  return (
    <div className="performance-metrics">
      <h2>Performance Metrics</h2>
      <div className="kpi-list">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="kpi-item">
            <h3>{kpi.name}</h3>
            <div className="kpi-values">
              <div className="kpi-value">{kpi.value}%</div>
              <div className="kpi-target">Target: {kpi.target}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;
