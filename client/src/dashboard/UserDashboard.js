import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillBook, AiFillCheckCircle, AiFillClockCircle, AiOutlineApartment, AiTwotoneVideoCamera } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi';
import { FcAddImage, FcBiotech } from 'react-icons/fc';
import { VscVm, VscBellDot } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import './UserDashboard.css'; // Import the CSS file for styling
import MyProjects from './User Dashboard/MyProjects.js';
import CreateNewEstimate from './User Dashboard/CreateEstimate.js';
import EstimationTools from './User Dashboard/EstimationTools';
import ProjectManagement from './User Dashboard/ProjectManagement.js';
import DocumentManagement from './User Dashboard/DocumentManagement.js';
import CollaborationCommunication from './User Dashboard/CollaborationCommunication.js';
import ReportComponent from './User Dashboard/ReportComponent.js'
import Notifications from './User Dashboard/Notifications.js';
import UserManagementAndSettings from './User Dashboard/usermanagementsettings.js';


const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('personal-info');
  const navigate = useNavigate();

  //useEffect hook to check login status
  useEffect(() => {
    async function checkLoginStatus () {
      try {
        const response = await axios.get('http:localhost:5000/login');
        if (response.status !== 200) {
          //User is not logged in, redirect to login page
          navigate('/login');
        }
      } catch (error) {
    console.error("Error:", error);
      }
    }
    checkLoginStatus();
  }, [navigate]);
    

 const handleLogout = () => {
  navigate('/login');
  };


  const renderContent = () => {
    switch (selectedTab) {
      case 'my-projects':
        return (
          <MyProjects />
        )
      case 'create-estimate':
        return (
         <CreateNewEstimate />
        );
        case 'estimation-tools':
          return (
         <EstimationTools />
          );
          case 'project-management':
            return (
             <ProjectManagement />
            );
                case 'documents':
                  return (
                  <DocumentManagement />
                  );
                  case 'communication':
                    return (
                     <CollaborationCommunication />
                    );
                    case 'reports':
                      return (
                       <ReportComponent />
                      );
                      case 'notifications':
                        return (
                         <Notifications />
                        );
                     
                        case 'settings-list':
                          return (
                   
                         <UserManagementAndSettings />
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
              className={selectedTab === 'my-projects' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('my-projects')}
            >
      <AiFillBook /> My Projects
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'create-estimate' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('create-estimate')}
            >
           <AiFillCheckCircle/>   Create New Estimate
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'estimate-list' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('estimate-list')}
            >
           <AiFillClockCircle />   Previously Created Estimates
            </Link>
          </li>
          <li>
          </li>
          <li>
            <Link
              className={selectedTab === 'estimation-tools' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('estimation-tools')}
            >
            <AiOutlineApartment/>  Estimation Tools
            </Link>
          </li>
          <li>  
          <Link
              className={selectedTab === 'project-management' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('project-management')}
            >
           <AiTwotoneVideoCamera/> Management
            </Link>
            </li>
            <li>
            <Link
              className={selectedTab === 'documents' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('documents')}
            >
            <FcAddImage />Document Management
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'communication' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('communication')}
            >
           <FcBiotech />Collaboration and communication messaging
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'reports' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('reports')}
            >
           <VscVm />Reports and Analytics
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'notifications' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('notifications')}
            >
           <VscBellDot />Notifications and Reminders
            </Link>
          </li>
          <li>
            <Link
              className={selectedTab === 'settings-list' ? 'nav-link active' : 'nav-link'}
              onClick={() => setSelectedTab('settings-list')}
            >
          <FiUser/>  User performances and Settings
            </Link>
          </li>
        </ul>
       <BiExit/> <button className='logout-button' onClick={handleLogout}>LOG OUT </button>  
      </div>
      <div className="content">
        {renderContent()}
      </div>
 
    </div>
  );
};

export default UserDashboard;
