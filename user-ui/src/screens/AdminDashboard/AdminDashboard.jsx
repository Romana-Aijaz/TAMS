import React from 'react';
import './adminDashboard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/adminSidebar/AdminSidebar';
import AdminBody from '../../components/adminBody/AdminBody';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const location = useLocation();
    
  const { state } = location;

  // Access the passed data (user) from props
  const { userLogin } = state;

  // Use the user data as needed
  console.log(userLogin);
  const [isAdmin, setIsAdmin] = useState(userLogin.isAdmin)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div>
        <Header />
    <div className="admin-dashboard">
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} isAdmin={isAdmin}/>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  backgroundColor: '#1d2634'}}>
    <AdminBody />
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default AdminDashboard;