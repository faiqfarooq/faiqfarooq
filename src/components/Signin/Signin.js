import React from 'react';
import { Link } from 'react-router-dom';
import "../Signin/Signin.css";
const Signin = () => {
    return ( 
        <div className='py-5'>
            <div className='py-5'>

         
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className=" py-5 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
               
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                
              
                <div className="row px-3">
                  <label className="mb-1"><h6 className="mb-0 text-sm">Email Address </h6></label>
                  <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                </div>
                <div className="row px-3">
                  <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                  <input type="password" name="password" placeholder="Enter password" />
                </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> 
                    <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label>
                  </div>
                  <Link to="/resetpassword" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
                </div>
                <div className="row mb-3 px-3">
                  <button type="submit" className="btn btn-blue text-center">Login</button>
                </div>
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">Don't have an account? <a className="text-danger ">Register</a></small>
                 
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
        </div>
        </div>
     );
}
 
export default Signin;