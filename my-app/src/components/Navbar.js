import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#014421', // dark green
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          Student Management System
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto" style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'Home', to: '/' },
              { label: 'Students', to: '/students' },
              { label: 'Grades', to: '/grades' },
              { label: 'Attendance', to: '/attendance' },
              { label: 'Add Student', to: '/students/new' },
            ].map(({ label, to }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  className="nav-link"
                  to={to}
                  style={{
                    backgroundColor: 'white',
                    color: '#014421',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: '0.3s',
                  }}
                  activeStyle={{
                    backgroundColor: '#e0ffe0',
                    color: '#014421',
                  }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
