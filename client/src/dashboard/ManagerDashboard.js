import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaAddressBook, FaBed, FaCity, FaClipboard, FaDragon, FaFile, FaPaperclip, FaShareAltSquare, FaWifi, FaWindows  } from 'react-icons/fa'
import './UserDashboard.css'; // Import the CSS file for styling

import ManagerInformation from './Manager Dashboard/ManagerInformation.js';
import ProjectSummary from './Manager Dashboard/ProjectSummary';
import FinancialMetrics from './Manager Dashboard/FinancialMetrics.js';
import ResourceManagement from './Manager Dashboard/ResourceManagement.js';
import TaskWorkflowManagement from './Manager Dashboard/Task.js';
import CommunicationCollaboration from'./Manager Dashboard/Communication.js';
import PerformanceMetrics from './Manager Dashboard/performancemetrics.js';
import RiskManagement from './Manager Dashboard/risk.js';
import ReportAnalytics from './Manager Dashboard/reports.js';
import DocumentManagement from './Manager Dashboard/document.js';


const projects = [
  {
    id: 1,
    name: 'Project 1',
    status: 'Completed',
    deadline: '2023-06-30',
    milestones: [
      { id: 1, name: 'Milestone 1', completed: true },
      { id: 2, name: 'Milestone 2', completed: true },
      { id: 3, name: 'Milestone 3', completed: false },
    ],
  },
  {
    id: 2,
    name: 'Project 2',
    status: 'In Progress',
    deadline: '2023-07-15',
    milestones: [
      { id: 4, name: 'Milestone 1', completed: true },
      { id: 5, name: 'Milestone 2', completed: false },
      { id: 6, name: 'Milestone 3', completed: false },
    ],
  },
];
const calculateProjectProgress = (project) => {
  const totalMilestones = project.milestones.length;
  const completedMilestones = project.milestones.filter((milestone) => milestone.completed).length;
  const progressPercentage = (completedMilestones / totalMilestones) * 100;
  return progressPercentage.toFixed(2); // Return progress percentage rounded to 2 decimal places
};

//
  const ManagerDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('personal-info');
 
  const navigate = useNavigate();



 const handleLogout = () => {
  navigate('/login');
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'personal-info':
        return (<>
          <ManagerInformation />
          </>
        );

  
        case 'project-summary':
          return (
            <div className="project-summary">  
          <ProjectSummary projects={projects} calculateProjectProgress={calculateProjectProgress} />

      </div>
              
        
          );
          case 'financial-metrics':
            return (
           <FinancialMetrics />
            );
          case 'resource-management':
             return (
                    <div className="resource-management">
                      <ResourceManagement />
                 </div>
                  );
         case 'task-workflow-management':
             return (
                     <>
                     <TaskWorkflowManagement />
                     </>
                    );
       case 'communication-collaboration':
            return (
                <CommunicationCollaboration />
                      );
       case 'performance-metrics':
             return (
            <PerformanceMetrics />
                       );
       case 'risk-management':
           return (
          <RiskManagement />
                   );
        case 'reports-analytics':
            return (
            <ReportAnalytics />
                 );
         case 'document-management':
              return (
            <DocumentManagement />
                );
          
      default:
        return null;
    }
  };
  

  return (
    <div className="user-dashboard">
      <div className="sidebar"> 
        <ul className="sidebar-nav">
          <li>
            <Link
              className={selectedTab === 'personal-info' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('personal-info')}
            >
             <FaAddressBook /> Personal Information
            </Link>
          </li>
          <li>  
          <Link
              className={selectedTab === 'project-summary' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('project-summary')}
            >
          <FaClipboard /> Project Summary
            </Link>
            </li>
            <li>
            <Link
              className={selectedTab === 'financial-metrics' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('financial-metrics')}
            >
            <FaPaperclip />Financial Metrics
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'resource-management' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('resource-management')}
            >
             <FaShareAltSquare /> Resource Management
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'task-workflow-management' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('task-workflow-management')}
            >
            <FaCity />Task and Workflow Management
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'communication-collaboration' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('communication-collaboration')}
            >
           <FaWifi /> Communication and Collaboration
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'performance-metrics' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('performance-metrics')}
            >
           <FaWindows /> Performance Metrics
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'risk-management' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('risk-management')}
            >
          <FaDragon />Risk Management
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'reports-analytics' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('reports-analytics')}
            >
         <FaFile /> Reports and Analytics
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'document-management' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('document-management')}
            >
<FaBed />Document Management
            </Link>
          </li>
        </ul>
        <button className='logout-button' onClick={handleLogout}>LOG OUT </button>  
      </div>
      <div className="content">
        {renderContent()}
      </div>
 
    </div>
  );
};

export default ManagerDashboard;
