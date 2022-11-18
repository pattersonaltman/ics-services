import React , { useEffect, useState } from "react";
import ServiceAPI from "../../util/ServiceAPI"
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
     const  userData =  await axios.get(baseUrl + id)
     setUser(userData)
     }
     
      fetchData()
   }

}, [user]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  };

 const handleSubmit = (event) => {
event.preventDefault();
if(id){
  ServiceAPI.register(user)
} else {
  ServiceAPI.register(user)
}

 }

// console.log(user)
const {username, password, firstName, lastName, email, phone,dob} = user
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
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
     
       <br/>
      <button type="submit" className="btn btn-primary">
      
       Sign Up
      </button>
    </form>
  );
};

export default Register;
