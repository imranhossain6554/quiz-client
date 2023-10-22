import React from 'react';
import './PopularSection.css'
import image from '../../assets/img/illustrations/teamwork.svg'

import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
const PopularSection = () => {
    return (
        <>
            <section data-aos="fade-up" data-aos-duration="250" data-aos-delay="450">
                <div className="container py-4 py-xl-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="display-6 fw-bold pb-md-4">Popular Topics To&nbsp;<span
                            ><strong className='learn_text'>Learn</strong></span></h3>
                        </div>
                        <div className="col-md-6 pt-4">
                            <p className="text-muted mb-4">COURSE CATEGORIES</p>
                        </div>
                    </div>
                    <div className="row gy-4 gy-md-0">
                        <div
                            className="col-md-6 d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                            <div>
                                <div className="row gy-2 row-cols-1 row-cols-sm-2">
                                    <div className="col text-center text-md-start">
                                        <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                                            <i className="fas fa-paint-brush fs-3 text-primary bg-warning popular-logo">
                                            </i>
                                            <h5 className="fw-bold mb-0 ms-2">Design</h5>
                                        </div>
                                        <p className="text-muted my-3">Auctor nisi et, habitant gravida ad lectus posuere.</p>
                                    </div>
                                    <div className="col text-center text-md-start">
                                        <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-tabler icon-tabler-database fs-3 text-primary bg-warning popular-logo">

                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                                                <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                                                <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                                            </svg>
                                            <h5 className="fw-bold mb-0 ms-2">Data Science</h5>
                                        </div>
                                        <p className="text-muted my-3">Auctor nisi et, habitant gravida ad lectus posuere.</p>
                                    </div>
                                    <div className="col text-center text-md-start">
                                        <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-tabler icon-tabler-devices fs-3 text-primary bg-warning popular-logo">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <rect x="13" y="8" width="8" height="12" rx="1"></rect>
                                                <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                                                <line x1="16" y1="9" x2="18" y2="9"></line>
                                            </svg>
                                            <h5 className="fw-bold mb-0 ms-2">Development</h5>
                                        </div>
                                        <p className="text-muted my-3">Auctor nisi et, habitant gravida ad lectus posuere.</p>
                                    </div>
                                    <div className="col text-center text-md-start">
                                        <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-tabler icon-tabler-building-skyscraper fs-3 text-primary bg-warning popular-logo">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <line x1="3" y1="21" x2="21" y2="21"></line>
                                                <path d="M5 21v-14l8 -4v18"></path>
                                                <path d="M19 21v-10l-6 -4"></path>
                                                <line x1="9" y1="9" x2="9" y2="9.01"></line>
                                                <line x1="9" y1="12" x2="9" y2="12.01"></line>
                                                <line x1="9" y1="15" x2="9" y2="15.01"></line>
                                                <line x1="9" y1="18" x2="9" y2="18.01"></line>
                                            </svg>
                                            <h5 className="fw-bold mb-0 ms-2">Business</h5>
                                        </div>
                                        <p className="text-muted my-3">Auctor nisi et, habitant gravida ad lectus posuere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-first order-md-last">
                            <div><img src={image} className="rounded img-fluid w-100 fit-cover min-vh-50"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularSection;