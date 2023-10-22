import React from 'react';
import Header from './Header';
import { Helmet } from "react-helmet-async";
import CartSection from './CartSection';
import PopularSection from './PopularSection';
import CoursesSection from './CoursesSection';
import FaqSection from './FaqSection';
import JoinFreeWorkShop from './JoinFreeWorkShop';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Happy Students - Home</title>
            </Helmet>
            <div>
                <Header />
                <CartSection />
                <PopularSection />
                <CoursesSection />
                <FaqSection />
                <JoinFreeWorkShop />
            </div>
        </>
    );
};

export default Home;