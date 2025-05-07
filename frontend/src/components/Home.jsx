import React from 'react';

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* Home Page Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-100 h-100 p-4 bg-white"
        style={{ maxWidth: '1000px' }}
      >
        <h2 className="text-center mb-4">Welcome to the Dashboard</h2>
        <p className="lead text-center mb-4">
          This is your main dashboard where you can explore different sections, manage your profile, and customize your settings.
        </p>

        {/* Features Section */}
        <section className="features-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Explore Our Features</h3>
          <div className="row d-flex justify-content-center">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Manage Your Profile</h4>
                  <p>Update personal details, contact information, and profile preferences in this section.</p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Track Your Activities</h4>
                  <p>Keep track of your activities and progress with real-time updates and insights.</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Manage Settings</h4>
                  <p>Customize your experience by adjusting settings for notifications, privacy, and preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Dashboard Statistics</h3>
          <div className="row d-flex justify-content-center">
            {/* Stat 1 */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Active Users</h4>
                  <h5>2,450</h5>
                </div>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Projects Completed</h4>
                  <h5>350</h5>
                </div>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Pending Tasks</h4>
                  <h5>87</h5>
                </div>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="col-md-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Messages</h4>
                  <h5>18</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="recent-activities-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Recent Activities</h3>
          <div className="row d-flex justify-content-center">
            {/* Activity 1 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Registered</h5>
                  <p className="card-text">A new user has successfully registered on the platform.</p>
                  <p className="text-muted">10 minutes ago</p>
                </div>
              </div>
            </div>
            {/* Activity 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Profile Updated</h5>
                  <p className="card-text">John Doe updated their profile details and preferences.</p>
                  <p className="text-muted">30 minutes ago</p>
                </div>
              </div>
            </div>
            {/* Activity 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">New Comment Posted</h5>
                  <p className="card-text">A new comment was posted on your recent post.</p>
                  <p className="text-muted">1 hour ago</p>
                </div>
              </div>
            </div>
            {/* Activity 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Project Completed</h5>
                  <p className="card-text">The development of the new feature was successfully completed.</p>
                  <p className="text-muted">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calls to Action Section */}
        <section className="cta-section py-5 text-center w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3>Ready to take action?</h3>
          <p className="lead">Click below to get started with your tasks, settings, or explore more features.</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </section>

        {/* Footer Section */}
        <section
          className="footer-section py-4 bg-dark text-white text-center w-100 h-100 p-4 bg-white"
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          <p>&copy; 2025 Dashboard. All Rights Reserved.</p>
        </section>
      </form>
    </div>
  );
};

export default Home;
