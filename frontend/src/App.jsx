import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isRegister, setIsRegister] = useState(true); // Toggle between Register and Login
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    checked: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isRegister ? 'Registered' : 'Logged in'}:`, formData);
  };

  return (
    <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <form
        onSubmit={handleSubmit}
        className="w-100 h-100 p-4 bg-white"
        style={{ maxWidth: '1000px' }}
      >
        <h2 className="text-center mb-4">
          {isRegister ? 'Register' : 'Login'} Form
        </h2>

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
              style={{ height: '60px' }}
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
            style={{ height: '60px' }}
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
            style={{ height: '60px' }}
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
  );
}

export default App;
