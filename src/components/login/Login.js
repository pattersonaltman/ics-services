import React, { useState } from "react";

const Login = () => {
  const[username, setUsername]= useState("")
  const[password,setPassword]= useState("")

  


  console.log(username, password)
  return (
    <div id="loginpage" className="container">
      <div className="row">
        <form>
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
              onChange={(event)=> setUsername(event.target.value)}
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
              onChange={(event)=> setPassword(event.target.value)}
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
