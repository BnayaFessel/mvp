import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='background'>
         <div className="container">
      <form action="#">
        <div className="title">Login</div>
        <div className="input-box underline">
          <input type="text" placeholder="Enter Your Email" required />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Your Password" required />
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" value="Continue" />
        </div>
      </form>
      <div className="option">or Connect With Social Media</div>
      <div className="twitter">
        <a href="#"><i className="fab fa-twitter"></i>Sign in With Twitter</a>
      </div>
      <div className="facebook">
        <a href="#"><i className="fab fa-facebook-f"></i>Sign in With Facebook</a>
      </div>
    </div>
    </div>
  )
}
