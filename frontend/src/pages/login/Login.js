/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import './Login.scss'

const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
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
           const {email,password} = user
           if(email && password){
                const res = await axios.post("auth/login",user)
                if(!res.data){
                    alert("Wrong Credentials");
                }
                else{
                    setLoginUser({
                        username:res.data.username,
                        id:res.data._id
                    })
                    localStorage.setItem('user', res.data)
                    navigate("/")
                }     
           }
           else{
               alert("Invalid Input")
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
          <div className="login_body">
              
              <form action="" className="login_form" onSubmit={handleSubmit}>
                <span className="login_form_heading">
                    Login to your account
                </span>
                <input 
                className="login_input" 
                type="text" 
                placeholder="Email address" 
                name="email"
                value={user.email}
                onChange={handleChange}
                // ref = ""
                />
                <input 
                className="login_input" 
                type="text" 
                placeholder="Password" 
                name='password'
                value={user.password}
                onChange={handleChange}
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
