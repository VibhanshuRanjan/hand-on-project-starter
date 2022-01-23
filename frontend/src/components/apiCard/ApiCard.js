import React from 'react';
import './ApiCard.scss'

const ApiCard = (apiCard) => {
  const PP = "/images/"
  return (
      <div className="apiCard">
          <img className='apiCard_img' src={PP+apiCard.photo} alt="Background Remove" />
          <div className="apiCard_info">
              <div className="apiCard_info_title">
                    {apiCard.title}
              </div>
              <div className="apiCard_info_desc">
                    {apiCard.desc}
              </div>
          </div>
      </div>
  )
};

export default ApiCard;
