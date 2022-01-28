import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from '../../components/button/Button';
import Navbar from '../../components/navbar/Navbar';
import './Register.scss'

const Register = () => {
  const [user,setUser] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = e => {
      
      const {name,value} = e.target
      setUser({
        ...user,
        [name]:value
      })
      
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {username,email,password} = user
    if(username && email && password)
    {
      
        const res = await axios.post("auth/register",user);
        console.log(res.data)
        if(!res.data)
          alert("Already registered with the entered email id!");
        
    }
    else{
      alert("invalid input")
    }
    
  };

  return (
    <div className="login">
        <Navbar user={false} login={true}/>
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
            
            <form action="" className="login_form" onSubmit={handleSubmit}>
                <span className="login_form_heading">
                    Create your account
                </span>
              <input 
              className="login_input" 
              type="text" 
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              // ref = ""
              />
              <input 
              className="login_input" 
              type="text" 
              placeholder="Email address" 
              name ="email" 
              value={user.email}
              onChange={handleChange}
              // ref = ""
              />
              <input 
              className="login_input" 
              type="text" 
              placeholder="Password" 
              name="password"
              value={user.password}
              onChange={handleChange}
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
