import React from 'react';


import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
const CartSection = () => {
    return (
        <>
            <section data-bss-disabled-mobile="true" data-aos="fade-up" data-aos-duration="450" data-aos-delay="250">
                <div className="container py-4 py-xl-5">
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4">
                                <div className="card-body">

                                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon bg-dark">
                                        <i className='fas fa-book-open border border-white text-white'></i>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold">
                                            Course Content
                                        </h4>
                                        <p className="text-muted">Our platform also features a collaborative learning environment,
                                            where you can connect with fellow learners.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second round */}
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4">
                                <div className="card-body">
                                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon bg-dark">
                                        <i className='fas fa-question-circle border border-white text-white'></i>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold">
                                            Community
                                        </h4>
                                        <p className="text-muted">Tap into the brainpower of thousands of experts worldwide. Find
                                            expert explanations for textbooks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* third round */}
                        <div className="col">
                            <div className="card border-light border-1 d-flex justify-content-center p-4">
                                <div className="card-body">
                                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon bg-dark">
                                        <i className='fab fa-internet-explorer border border-white text-white'></i>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold">
                                            Industry Expert
                                        </h4>
                                        <p className="text-muted">Online learning has become increasingly popular in recent years,
                                            offering a flexible and convenient way for learning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartSection;