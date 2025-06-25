import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SidebarComponent = () => {
    return (
        <div className="d-flex flex-column bg-dark text-white p-3" style={{ width: '220px', minHeight: '100vh' }}>
            <h4 className="mb-4">
                <i className="bi bi-list me-2"></i>Menu
            </h4>
            <ul className="nav nav-pills flex-column gap-2">
                <li className="nav-item">
                    <Link to="/homepage" className="nav-link text-white">
                        <i className="bi bi-house-door me-2"></i> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/list-users" className="nav-link text-white">
                        <i className="bi bi-people me-2"></i> List Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-user" className="nav-link text-white">
                        <i className="bi bi-person-plus me-2"></i> Add User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-client" className="nav-link text-white">
                        <i className="bi bi-person-badge me-2"></i> Add Client
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-pipeline" className="nav-link text-white">
                        <i className="bi bi-bar-chart-line me-2"></i> Add Pipeline
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-price-list" className="nav-link text-white">
                        <i className="bi bi-tags me-2"></i> Add Price List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/get-price" className="nav-link text-white">
                        <i className="bi bi-currency-dollar me-2"></i>
                        Get Price
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-renewals" className="nav-link text-white">
                        <i className="bi bi-arrow-repeat me-2"></i> Add Renewals
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-ticket-entry" className="nav-link text-white">
                        <i className="bi bi-ticket-perforated me-2"></i> Ticket Entry
                    </Link>
                </li>
            </ul>
        </div>

    );
};

export default SidebarComponent;
