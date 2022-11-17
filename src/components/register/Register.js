import React , { useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Register = () => {
  const baseUrl = "http://localhost:8080/api/user/"
  const [user, setUser] = useState({});
const navigate = useNavigate()
const {id} = useParams()

useEffect(() => {
  if(id){
    const fetchData = async () =>{
      const userData = await axios.get(baseUrl + id)
      setUser(userData)
     }
     fetchData()
  }

}, []);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

 const handleSubmit = (event) => {
event.preventDefault();
if(id){
   axios.put(baseUrl + id, user).then(() => navigate(baseUrl + id)).catch(error => console.log(error))
} else {
  axios.post(baseUrl, user)
}

 }

// console.log(user)
const {username, password, firstname, lastname, email, phone,dob} = user
  return (
    <form className="container" onSubmit={handleSubmit}>
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
            // country={'us'}
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
     
       <br/>
      <button type="submit" className="btn btn-primary">
      
       Sign Up
      </button>
    </form>
  );
};

export default Register;
