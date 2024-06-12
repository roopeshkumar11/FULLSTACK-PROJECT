
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../style/Sign.css"

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post("http://localhost:3001/register", { email, password, cnfPassword })
      .then((response) => {
        console.log(response);
        navigate("/login")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="row col-6 offset-3 sign">
          <h2 className='text-center mb-5'>Sign up</h2>
        <div className="mb-3 row">
          <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={(e) => setCnfPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-reg">Register</button></div>
      </form>
      <p className='offset-5 mt-3'>Already have an account? <Link to="/login">Login</Link></p>
    </>
  );
}

export default Signup;
