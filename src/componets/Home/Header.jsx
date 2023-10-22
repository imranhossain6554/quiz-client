import React from 'react';
import './Header.css';
import { FaArrowRight } from 'react-icons/fa';
import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
const Header = () => {
    return (
        <>
            <header className='pt-5'>
                <div className="container pt-4 pt-xl-5 ">
                    <div className="row pt-5">
                        <div className="col-md-8 text-center text-md-start mx-auto">
                            <div className="text-center">
                                <h1 className='d-4 fw-bold mb-5 text-black pb-0 mb-4'>
                                    ASK QUESTIONS <br />&nbsp; <span className='text-black-50'>GET</span>
                                    <span className='text-black-50'>&nbsp;</span>
                                    <span className='help_text'>Help.</span>
                                </h1>
                                <p className='fs-5 text-muted mb-5 max-w-600'>
                                    Get help the community! <br /> <span className='text-black'>
                                        Get more Courses, Quiz &amp; Answers for Free.
                                    </span>
                                </p>
                                <form className="d-flex justify-content-center flex-wrap" method='post'>
                                    <div className="shadow-lg mb-3"></div>
                                    <div className="shadow-lg mb-3">
                                        <button className='btn btn-primary fs-6 pr-6 pl-6 border-pill bg-dark box-shadow ' type='submit'>
                                            Find Your Answer &nbsp;
                                            <FaArrowRight />
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Header;