import React from 'react';
import { FaAddressBook, FaArchive, FaBinoculars, FaRssSquare, FaServer, FaSimplybuilt, FaTrello } from 'react-icons/fa';
import './Document.css';

function DocumentManagement() {
  return (
    <div className="document-management-container">
      <div className="document-section">
        <h2>User Manual</h2>
        <div className="document-card">
          <div className="document-details">
            <h3>User Manual Title</h3>
           
<p><FaAddressBook />1.System Overview: An introduction to the system, its purpose, and its benefits. It provides an overview of the key features and explains how the system can streamline the estimation process in construction projects.</p>

<p><FaServer />2.User Interface: A detailed description of the user interface elements, such as menus, toolbars, and panels. It explains how to navigate through the system and access different modules and functionalities.</p>

<p><FaArchive />3.Project Setup: Step-by-step instructions on how to set up new construction projects within the system. It covers defining project parameters, creating cost categories, and inputting project-specific data.</p>

<p><FaBinoculars />4.Estimation Process: A comprehensive guide on performing estimates using the Construction Estimator System. It explains how to create and manage cost items, apply cost formulas, adjust quantities, and account for contingencies.</p>

<p><FaRssSquare />5.Reporting and Analysis: Instructions on generating reports and analyzing estimation data. It covers generating cost summaries, comparing estimates against actual costs, and producing detailed project reports.</p>

<p><FaSimplybuilt />6.Collaboration and Sharing: Guidance on collaborating with team members, sharing project data, and managing user permissions .</p>

<FaTrello />7.Troubleshooting and Support: Information on troubleshooting common issues and accessing technical support. It provides resources for resolving technical problems and obtaining assistance when needed.
           
          </div>
        </div>
      </div>

       <div className="document-section">
           <h2>API Reference</h2>
          <div className="document-card">
          <div className="document-details">
            <h3>API Reference Title</h3>
             <p>The API Reference for the Construction Estimator System provides detailed information and documentation about the available APIs and their functionalities. It serves as a comprehensive guide for developers and users who want to integrate or interact with the system programmatically.</p>
             <p>The API Reference includes detailed descriptions of the endpoints, request and response structures, authentication methods, error handling, and any other relevant information needed to successfully utilize the APIs. It covers various aspects of the system's functionality, such as project management, cost estimation, resource allocation, and data retrieval.</p>
             <p>By referring to the API Reference, developers can understand how to interact with the system, make API calls, and leverage its capabilities to build custom applications, integrate with other systems, or automate certain processes. It serves as a valuable resource for understanding the available functionalities, input parameters, expected outputs, and any specific requirements for successful API integration.</p>       
          </div>
        </div>
       </div>

      <div className="document-section">
            <h2>Tutorials</h2>
        <div className="document-card">
          <div className="document-details">
            <h3>Tutorials Title</h3>
            <FaAddressBook /><p>Project Setup: Learn how to set up a new construction project in the system, define project parameters, and configure project-specific settings.</p>
            <FaServer /><p>Quantity Takeoff: Understand the process of performing quantity takeoff for various construction elements, such as materials, labor, equipment, and subcontractors. Discover techniques for accurate and efficient quantity measurement.</p>
            <FaArchive /><p>Cost Estimation: Explore techniques for cost estimation, including itemizing project expenses, calculating material costs, factoring in labor and equipment costs, and accounting for indirect costs and contingencies.</p>
            <FaSimplybuilt /><p>Bid Preparation: Learn the best practices for preparing construction bids, including analyzing project requirements, creating detailed bid proposals, and pricing strategies to enhance competitiveness.</p>
            <FaRssSquare /><p>Reporting and Analysis: Discover how to generate comprehensive reports and perform data analysis to gain insights into project costs, compare actual vs. estimated values, track project progress, and identify areas for improvement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentManagement;
