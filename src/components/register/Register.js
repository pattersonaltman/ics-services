import React from "react";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2'

const Register = () => {
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };
const {username, password, firstname, lastname, email, phone,dob} = user
  return (
    <form className="container">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={handleChange}
          />
        </div>
      </div>
      
        <div className="form-group col-md-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
       
        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="(123)-456-7890"
            value={phone}
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group col-md-6">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            placeholder="Date of Birth"
            value={dob}
            onChange={handleChange}
          />
        </div>
     

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default Register;
