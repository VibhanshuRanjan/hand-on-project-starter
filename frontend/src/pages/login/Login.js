import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import './Login.scss'

const Login = () => {
  return (
      <div className="login">
          <Navbar login={true}/>
          <div className="line"></div>
          <div className="login_sidebar">
              <div className="login_sidebar_card">
                <div className="login_sidebar_icon">
                        <img src="/images/loginicon.png" alt="Error" />
                    </div>
                    <div className="login_sidebar_heading">
                        Welcome to your Dashboard
                    </div>
                    <div className="login_sidebar_desc">
                        Your uploaded APIs will be displayed here once you login to your account   
                    </div>
                </div>
          </div>
          <div className="login_body">
              
              <form action="" className="login_form">
                <span className="login_form_heading">
                    Login to your account
                </span>
                <input 
                className="login_input" 
                type="text" 
                placeholder="Email address" 
                // ref = ""
                />
                <input 
                className="login_input" 
                type="text" 
                placeholder="Password" 
                // ref = ""
                />
                <Button color="color-E5E5E5" value="Login" size="size-400-44" className="login_button" />
              </form>
              <div className='register_login'>
                <span className='register_login_text'>Donot have an account?</span>
                    <Link className='link' to='/Register'>
                        <Button  value="Register" color="color_black" size="size-82-36" />
                    </Link>
                </div>


          </div>
      </div>
  )
};

export default Login;
