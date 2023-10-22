import React from 'react';
import './JoinFreeWorkShop.css'

import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
const JoinFreeWorkShop = () => {
    return (
        <>
            <section data-aos="fade-up" data-aos-duration="250" data-aos-delay="450" id='workShop' className="py-4 py-xl-5 pb-3  text-primary">
                <div className="container">
                    <section className="py-4 py-xl-5 h-50 pb-0">
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col-md-8 col-xl-6 col-xxl-8 text-center mx-auto">
                                    <h2 className="d-6 fw-bold text-white fs-5">
                                        Join Our Free
                                        Workshops</h2>
                                    <h2 className="d-6 fw-bold text-white fs-6"> Join us at
                                        our “Free Workshop” event to expand your knowledge</h2>
                                </div>
                            </div>
                            <form className="d-flex justify-content-center flex-wrap pt-4 mt-2" method="post">
                                <div className="mb-3"></div>
                                <div className="mb-3"><a className="btn btn-primary fs-6 pr-6 pl-6 rounded bg-white shadow text-primary" role="button"

                                    href="#">More Upcoming Workshop&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg"
                                        width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                        fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        className="icon icon-tabler icon-tabler-arrow-right fs-5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="13" y1="18" x2="19" y2="12"></line>
                                        <line x1="13" y1="6" x2="19" y2="12"></line>
                                    </svg> </a></div>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
            <section>
            </section>
        </>
    );
};

export default JoinFreeWorkShop;