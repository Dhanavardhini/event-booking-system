import React, { useState } from 'react'
// import Adminlogin from './Adminlogin'

function Forgotpass() {
   const[admin,setadmin]=useState(true)

   const Handleadmin=(e)=>{
    e.preventDefault()
    setadmin(false)
   }
  return (
    <div className="admin-box">
      {admin ? (<div className="login-container">
    
    <h1 className="login-title">Forget Password</h1>
    <form className="login-form" action="#" method="post" onSubmit={Handlesub}>
        <div className="form-group">
            <label for="username">New password</label>
            <input type="text" id="username" name="username" required/>
        </div>
        <div className="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <div className="btn-div">
        <button type="submit" className="login-button" onClick={Handleadmin}>Reset Password</button>
        </div>
        
    </form>
    </div>
):(<div className="login-container">
  <h1 className="login-title">Admin Login</h1>
  <form className="login-form" action="#" method="post" >
      <div className="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>
      </div>
      <div className="btn-div">
      <button type="submit" className="login-button">Login</button>
      </div>
      
  
  <div className="forgot-password">
  <a href="#" id="forgot-password-link" >Forgot Password?</a>
      
  </div>
  </form>
</div>)}
       


</div>
  )
}

export default Forgotpass