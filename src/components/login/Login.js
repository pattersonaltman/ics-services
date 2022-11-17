import React, { useState } from "react";
import ServiceAPI from "../../util/ServiceAPI"

const Login = () => {
  
  
  const[userLogin,setUserLogin]= useState({})
  
  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserLogin({ ...userLogin, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    ServiceAPI.login(userLogin)

    } catch (error) {
      console.log(error.msg);
    
    }
  };




  console.log(userLogin)
  const {username,password} = userLogin
  return (
    <div id="loginpage" className="container">
      <div className="row">
        <form onSubmit={ handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="col-form-label">
              Username
            </label>
            <input
              type="text"
              className="col-form-control"
              id="username"
              aria-describedby="emailHelp"
              value={username}
              onChange={handleChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <input
              type="password"
              className="col-form-control"
              id="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
