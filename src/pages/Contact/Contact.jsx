import React from 'react';
import { Helmet } from "react-helmet-async";
const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Happy Students - Contacts</title>
            </Helmet>
            <section className="py-5 mt-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="d-6 fw-bold mb-4">Got any <span className="text-decoration-underline">questions</span>?</h2>
                            <p className="text-muted">Our team is always here to help. Send us a message and we'll get back to you shortly.</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div>
                                <form className="p-3 p-xl-4" method="post">
                                    <div className="mb-3">
                                        <input type="text" className='shadow form-control' id='name-1' name='name' placeholder='Name' />
                                    </div>

                                    <div className="mb-3">
                                        <input type="email" className='shadow form-control' id='email-1' name='email' placeholder='Email' />


                                    </div>

                                    <div className="mb-3">
                                        <textarea className="shadow form-control" id="message-1" name="message" rows="6" placeholder="Message"></textarea></div>

                                    <div>
                                        <button className="btn btn-primary shadow d-block w-100" type="submit">Send </button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;