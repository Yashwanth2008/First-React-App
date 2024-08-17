import React from 'react'
import './LoginSignUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email ID'/>
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Forgot password? <span>click here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp
