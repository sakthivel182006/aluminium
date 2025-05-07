import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    checked: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formStyles, setFormStyles] = useState({
    boxShadow: '',
    backgroundColor: '',
    inputBorderColor: ''
  });

  // Function to generate random colors
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to update the styles
  const updateStyles = () => {
    setFormStyles({
      boxShadow: `10px 30px 70px 12px ${getRandomColor()}`,
      backgroundColor: getRandomColor(),
      inputBorderColor: getRandomColor()
    });
  };

  // Use useEffect to change styles automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(updateStyles, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isRegister) {
      // Simulate a login with hardcoded credentials
      if (formData.email === 'user@example.com' && formData.password === 'password123') {
        setIsLoggedIn(true); // Mark as logged in
      } else {
        alert('Invalid login credentials');
      }
    } else {
      // Handle registration (not implemented for this example)
      console.log('Registered:', formData);
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
          <form
            onSubmit={handleSubmit}
            className="w-100 h-100 p-4 bg-white"
            style={{
              maxWidth: '1000px',
              boxShadow: formStyles.boxShadow,
              backgroundColor: formStyles.backgroundColor,
              transition: 'all 0.5s ease-in-out' // Smooth transition for changes
            }}
          >
            <h2 className="text-center mb-4">{isRegister ? 'Register' : 'Login'} Form</h2>

            {isRegister && (
              <div className="form-group mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    height: '60px',
                    borderColor: formStyles.inputBorderColor
                  }}
                />
              </div>
            )}

            <div className="form-group mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  height: '60px',
                  borderColor: formStyles.inputBorderColor
                }}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  height: '60px',
                  borderColor: formStyles.inputBorderColor
                }}
              />
            </div>

            {isRegister && (
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  name="checked"
                  checked={formData.checked}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check">
                  Check me out
                </label>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 mb-3"
              style={{ height: '60px' }}
            >
              {isRegister ? 'Register' : 'Login'}
            </button>

            <div className="text-center">
              {isRegister ? (
                <p>
                  Already registered?{' '}
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setIsRegister(false)}
                  >
                    Login
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setIsRegister(true)}
                  >
                    Register
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
