import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import "../style/Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
   
      .then((response) => {
        console.log(response);
        if (response.data === "Success") {
          navigate("/main")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
       
        <div className="row offset-4 col-4 d-flex align-items-center mt-5 main">
        <h2 className='text-center mb-5'>Login</h2>
        
        <div className="mb-3 row ">
          <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="staticEmail" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-ctl ">Submit</button></div>
        
      </form>
      <p className='offset-5 mt-3'>Don't have an account? <Link to="/register">Register</Link></p>
   

    </>
  );
}

export default Login;
