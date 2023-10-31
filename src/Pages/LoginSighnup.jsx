import React from 'react'
import '../Pages/css/LoginSignup.css'

function LoginSighnup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continueing i agree to the terms of use & privacy policy.</p>
        </div>        
      </div>

    </div>
  )
}

export default LoginSighnup;