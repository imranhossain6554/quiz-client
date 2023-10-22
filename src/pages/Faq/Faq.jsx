import React from 'react';
import { Helmet } from "react-helmet-async";
const Faq = () => {
    return (
        <>
            <Helmet>
                <title>Happy Students - FAQ</title>
            </Helmet>
            <div className='container'>
                <h1 className='text-center text-decoration-underline'>About FAQ</h1>
                <p>FAQ stands for "Frequently Asked Questions." It refers to a list of common questions and their corresponding answers that are often asked about a particular topic, product, service, or subject matter.

                    FAQs are typically provided by businesses, organizations, websites, or individuals to help users or customers quickly find answers to common queries without having to contact customer support or search extensively through documentation.</p>
            </div>
        </>
    );
};

export default Faq;