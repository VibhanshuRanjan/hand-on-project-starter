import React from 'react';
import Button from '../button/Button';
import "./DashboardHeader.scss"

const DashboardHeader = () => {
  return (
      <div className="dashboardHeader">
          <div className="dashboard_header_left">
            <img src="/images/bgremove.png" alt="" className="dashboard_header_left_img" />
          </div>

          <div className="dashboard_header_info">
            <div className="dashboard_header_info_title">
                BACKGROUND IMAGE REMOVE
            </div>
            <div className="dashboard_header_info_desc">
                100% automatic and free
            </div>
          </div>
          <div className="dashboard_header_view_btn">
            <Button value="View App" color="color-1E272E" size="size-133-44"/>
          </div>
          
      </div>
  )
};

export default DashboardHeader;
