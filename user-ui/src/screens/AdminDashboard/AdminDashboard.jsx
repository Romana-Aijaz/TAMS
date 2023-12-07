import React from 'react';
import './adminDashboard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/adminSidebar/AdminSidebar';
import AdminBody from '../../components/adminBody/AdminBody';
import { useState } from 'react';

const AdminDashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div>
        <Header />
    <div className="admin-dashboard">
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
    <AdminBody />
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default AdminDashboard;