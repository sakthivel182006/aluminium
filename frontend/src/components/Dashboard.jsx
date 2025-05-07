import React, { useState } from 'react';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Working from './Working';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home'); // Track the active tab (home, profile, settings)
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [name, setName] = useState('John Doe'); // Placeholder for name
  const [email, setEmail] = useState('john.doe@example.com'); // Placeholder for email

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Randomly generate a letter for the profile logo
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter A-Z

  // Function to toggle modal visibility
  const handleProfileClick = () => {
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission and update user details (for now just log the values)
  const handleUpdateDetails = () => {
    console.log('Updated Name:', name);
    console.log('Updated Email:', email);
    handleCloseModal(); // Close the modal after update
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top vw-100">
        <div className="container-fluid w-100">
          <a className="navbar-brand" href="#">Dashboard</a>
          <div className="navbar-nav mx-auto">
            <button
              className={`nav-link btn ${activeTab === 'home' ? 'text-primary' : ''}`}
              onClick={() => handleTabChange('home')}
              style={{ marginRight: '240px' }} // Adds space between buttons
            >
              Home
            </button>
            <button
              className={`nav-link btn ${activeTab === 'profile' ? 'text-primary' : ''}`}
              onClick={() => handleTabChange('profile')}
              style={{ marginRight: '240px' }} // Adds space between buttons
            >
              Business
            </button>
            <button
              className={`nav-link btn ${activeTab === 'working' ? 'text-primary' : ''}`}
              onClick={() => handleTabChange('working')}
              style={{ marginRight: '240px' }}
            >
              Working
            </button>
            <button
              className={`nav-link btn ${activeTab === 'settings' ? 'text-primary' : ''}`}
              onClick={() => handleTabChange('settings')}
              style={{ marginRight: '240px' }}
            >
              Settings
            </button>
           

            {/* Profile Logo (Randomly generated) */}
            <div
              className={`nav-link ${activeTab === 'profile' ? 'text-primary' : ''}`}
              onClick={handleProfileClick}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  borderRadius: '50%',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                {randomLetter}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area with padding to prevent overlap */}
      <div className="p-4 mt-5">
        {activeTab === 'home' && <Home />}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'working' && <Working />}
      </div>

      {/* Modal for Profile Update */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} onClick={handleCloseModal}>
          <div
            className="modal-dialog"
            style={{ marginTop: '100px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Profile</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateDetails}>Update</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
