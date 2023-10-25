import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../pages/DashBoard/Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div class="row">
          <div class="col-md-6">
            <Sidebar />
          </div>
          <div class="col-md-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
