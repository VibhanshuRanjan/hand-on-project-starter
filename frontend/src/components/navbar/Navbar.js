import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Navbar.scss'


const Navbar = (navbar) => {
//   console.log(navbar.user.username,navbar.login);
  return(
      <div className="navbar">
          <div className="nav_left">
              <img src="/images/logo.svg" alt="Cuvette Logo" />
          </div>
          {navbar.user.username?
          (<div className="nav_right">
              <div className="nav_right_myApis">
                  My APIs
              </div>
              <div className="nav_right_myAccount">
                  My Account
              </div>
              <div className="nav_btn">
                <Button value="+New API" color="color-142683" size="size-133-44"/>
              </div>
          </div>):
          (
                !navbar.login && (
                    <Link className="nav_btn" to='/login'>
                        <Button value="Login" color="color-142683" size="size-133-44"/>
                    </Link>

                )
              
          )}
      </div>
  )
};

export default Navbar;
