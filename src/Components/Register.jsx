import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);  // Logs email, password, and name to the console
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="auth-form-container">
        <label htmlFor="name">Name</label>
        <input
        className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}  // Update state on input change
          type="text"
          placeholder="King"
          id="name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update state on input change
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Update state on input change
          type="password"
          placeholder="*************"
          id="password"
          name="password"
        />

        <button type="submit" className="btn btn-primary">Register</button>
      </div>

      <div className="login-register-switch pl-2 pr-3">
      <button className="btn btn-primary"  onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>

      </div>
    </form>
  );
};
