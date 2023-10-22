import React from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet-async";
import './Courses.css';
import ranking1 from '../../assets/img/illustrations/ranking.svg';
import ranking2 from '../../assets/img/illustrations/presentation-2.svg';
import ranking3 from '../../assets/img/illustrations/video-call.svg';
import brands1 from '../../assets/img/brands/instacart.png';
import brands2 from '../../assets/img/brands/kickstarter.png';
import brands3 from '../../assets/img/brands/lyft.png';
import brands4 from '../../assets/img/brands/pinterest.png';
import brands5 from '../../assets/img/brands/shopify.png';
import brands6 from '../../assets/img/brands/twitter.png';
const Courses = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get('http://localhost:5000/api/quizcategory/categories',{
            withCredentials: true
          });
          console.log(response.data);
        } catch (err) {
          console.log('Error:', err);
    }
      };
    return (
        <>
            <Helmet>
                <title>Happy Students - Courses</title>
            </Helmet>
            <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <div className="mb-5"><button className="btn btn-primary shadow rounded" type="submit" onClick={handleFormSubmit}>Test</button></div>
            </div>
        </>
    );
};

export default Courses;