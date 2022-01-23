/* eslint-disable react/prop-types */
 import React from 'react';
 import './Button.scss'
 
 const Button = (button) => {
   return (
    <button className={`button ${button.size} ${button.color}`}>
            {button.value}
    </button>
   )
 };
 
 export default Button;
 