import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);  // Outputs email and password to the console
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="auth-form-container">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          className="form-control mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state on input change
          type="password"
          placeholder="*************"
          id="password"
          name="password"
        />

        <button type="submit" className="btn btn-primary">Login</button>
      </div>

      <div className="login-register-switch">

      <button className="btn btn-primary"   onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>

    </form>
  );
};
