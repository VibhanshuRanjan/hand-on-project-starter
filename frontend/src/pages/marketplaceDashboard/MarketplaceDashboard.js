import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import AllApis from '../../components/allApis/AllApis';
import "./MarketplaceDashboard.scss"

const MarketplaceDashboard = () => {
  return (
    <div className="marketplaceDashboard">
        <Navbar login={false}/>
        <div className="dashboard_body">
        <div className="dashboard_header">
            <DashboardHeader />
        </div>
        
        <div className="dashboard_allApis_text">
            All APIs
        </div>
        <div className="dashboard_allApis">
            <AllApis />
        </div>
        </div>
        
    </div>
    
  )
};

export default MarketplaceDashboard;

