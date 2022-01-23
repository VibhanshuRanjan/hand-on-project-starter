import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Navbar from '../../components/navbar/Navbar';
import './Register.scss'

const Register = () => {
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
        <div className="register_body">
            
            <form action="" className="login_form">
                <span className="login_form_heading">
                    Create your account
                </span>
              <input 
              className="login_input" 
              type="text" 
              placeholder="Username" 
              // ref = ""
              />
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
              <Button color="color-E5E5E5" value="Register" size="size-400-44" className="login_button" />
            </form>
            <div className='register_login'>
              <span className='register_login_text'>Already have an account?</span>
                  <Link className='link' to='/Login'>
                    <Button  value="Login" color="color_black" size="size-82-36" />
                  </Link>
              </div>


        </div>
    </div>
    )
};

export default Register;
