import React, { useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adminlogin() {
  const [user_name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Trim spaces to avoid validation issues
    const trimmedPassword = password.trim();

    if (!user_name || !password) {
      alert('Please enter both username and password.');
      return;
    }

    if (trimmedPassword.length !== 6) {
      alert('Password must be exactly 6 characters.');
      console.log(`Password entered: "${trimmedPassword}"`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://localhost/vechilebackend/controllers/api/admin/post/A_InsertPlans.php',
        {
          name: user_name,
          password: trimmedPassword,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.data.message === "Plan Added successful") {
        alert('Login successful! Redirecting to dashboard...');
        navigate('/dash');
      } else {
        setError(response.data.message || 'Invalid login credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-box">
      <div className="login-container">
        <h1 className="login-title">Admin Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="btn-div">
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
