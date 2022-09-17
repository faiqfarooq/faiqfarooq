import React from 'react';
import { Link } from 'react-router-dom';
const Resetpass = () => {
    return ( 
        <div className='container py-5 my-5'>
        <div className=' py-5 my-5'>
        <h3><i className="fa fa-lock fa-4x" /></h3>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div className='row'>
                              <div className='col-3'></div>
                              <div className='col-6'>
                              <form className="form">
                        <fieldset>
                          <div className="form-group">
                            <div className="input-group">
                          
                              
                              <input id="emailInput" placeholder="email address" 
                              className="form-control" type="email" oninvalid="setCustomValidity('Please enter a valid email address!')" onchange="try{setCustomValidity('')}catch(e){}" required />
                            </div>
                          </div>
                          <div className="form-group">
                            <input className="btn btn-lg btn-primary btn-block" defaultValue="Send My Password" type="submit" />
                          </div>
                        </fieldset>
                      </form>
                      <p className='text-left' >Return to <Link className='text-danger'>login</Link> </p>
                              </div>
                              <div className='col-3'><a href="https://griap.link/resources/hit/1546/HvEMyfy39v"><img src="https://griap.link/resources/view/1546/HvEMyfy39v" alt="Build online presence with trusted marketing software (en)"/></a></div>
                           
                              </div>
                              
                    
        </div>



       
    
      </div>
     );
}
 
export default Resetpass;