import React from 'react';
import Sidebar from '../pages/DashBoard/Sidebar/Sidebar';
import Navbar from '../pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <div className="container">
                <div className="row">
                    <Sidebar />

                </div>
            </div>
            <Footer />

        </>
    );
};

export default Dashboard;