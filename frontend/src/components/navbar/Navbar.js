import React from 'react';
import Button from '../button/Button';
import './Navbar.scss'


const Navbar = (navbar) => {
  const user=false;
  return(
      <div className="navbar">
          <div className="nav_left">
              <img src="/images/logo.svg" alt="Cuvette Logo" />
          </div>
          {user?
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
                    <div className="nav_btn">
                        <Button value="Login" color="color-142683" size="size-133-44"/>
                    </div>

                )
              
          )}
      </div>
  )
};

export default Navbar;
