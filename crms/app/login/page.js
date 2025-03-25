'use client'; 

import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login/route.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Handle success (redirect the user based on their role)
      window.location.href = data.redirectUrl; // Or use a Next.js `useRouter` for navigation
    } else {
      // Handle error message
      setErrorMessage(data.message || 'Login failed');
    }
  };

  return (
    <>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: '350px' }}>
          <h2 className="text-center mb-3">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          {errorMessage && <div className="mt-3 text-danger">{errorMessage}</div>}
          <div className="text-center mt-3">
            <a href="/signup">Create an account</a>
          </div>
        </div>
      </div>
    </>
  );
}
