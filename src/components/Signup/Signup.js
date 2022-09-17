import React from "react";
import { useState } from "react";
import Footer from "../Footer";
import "../Signup/Signup.css";
import Terms from "../Signup/Terms";
const Signup = () => {
  const [newuser,setnewuser]=useState({
      name:'',email:'',password:''
  });
  let name,value;

  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setnewuser({...newuser,[name]:value});
  }
const handleSubmit=(value)=>{
  value.preventDefault();
  alert("Successfully registered")
}



    return ( 
   

        
        <div style={{backgroundColor: '#ffffff'}}>
           
                
           <section className="vh-100" >
        <div className="container h-100  py-5" >
          
          <div className="row d-flex justify-content-center align-items-center h-100 py-5">
            <div className="col-lg-12 col-xl-11">
              <div className=" text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                <a href="https://griap.link/resources/hit/1556/HvEMyfy39v"><img src="https://griap.link/resources/view/1556/HvEMyfy39v" alt="Ecommerce Marketing Automation"/></a>
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            <input type="text" id="form3Example1c" value={newuser.name} name="name" onChange={handleInputs} placeholder="Enter Full name" className="form-control" />
                          
                          </div>
                        </div>



                      
         




                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            <input type="email" id="form3Example3c" value={newuser.email} name="email" onChange={handleInputs} placeholder="Enter email" className="form-control" />
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input type="password" id="form3Example4c" value={newuser.password} name="password" onChange={handleInputs} className="form-control" />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            <input type="password" id="form3Example4cd" value={newuser.ppasword}  name="ppassword"  className="form-control" />
                            
                          </div>
                        </div>
                   
                    
      
                        <div className="form-check d-flex  mb-5">
                          <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in {" "}
                            
   
        <a type="text" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Terms of service
        </a>
    
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <Terms/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
      
                            
                           
                          </label>
                        </div>




                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <div className="py-5">
{"   "}


     </div>
     
        </div>
     );
}
 
export default Signup;