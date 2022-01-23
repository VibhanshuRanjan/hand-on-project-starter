/* eslint-disable no-unused-vars */
import Login from './pages/login/Login';
import MarketplaceDashboard from './pages/marketplaceDashboard/MarketplaceDashboard';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MarketplaceDashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />  
        </Routes> 
    </Router>
   
  );
}

export default App;
