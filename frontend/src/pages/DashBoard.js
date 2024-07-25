import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faDollarSign, 
  faProjectDiagram, 
  faUsers, 
  faCalendarAlt, 
  faHandHoldingHeart, 
  faChartBar 
} from '@fortawesome/free-solid-svg-icons';
import './CSS/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Charity Dashboard</h2>
        <ul>
          <li>
            <NavLink to="/dashboard" end>
              <FontAwesomeIcon icon={faHome} /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/donations">
              <FontAwesomeIcon icon={faDollarSign} /> Donations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/projects">
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/volunteers">
              <FontAwesomeIcon icon={faUsers} /> Volunteers
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/events">
              <FontAwesomeIcon icon={faCalendarAlt} /> Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/beneficiaries">
              <FontAwesomeIcon icon={faHandHoldingHeart} /> Beneficiaries
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reports">
              <FontAwesomeIcon icon={faChartBar} /> Reports
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;