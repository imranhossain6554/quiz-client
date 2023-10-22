import React from 'react';
import './Footer.css'
import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className='footer_part'>
                <footer className='footer_second_part'>
                    <div className='row'>
                        <div className="col-sm-6 col-md-4 footer-navigation">
                            <h3>
                                <a href="#" className='text-black'>Happy Students</a>
                            </h3>
                            <small className='fw-lighter text-black'>
                                It is a long
                                established fact that a reader will be distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum. <br /><br /><br />
                            </small>
                        </div>
                        <div className="col-sm-6 col-md-4 footer-contacts">
                            <div>
                                <span className="fa fa-map-marker footer-contacts-icon"> </span>
                                <p><span className="new-line-span text-black">
                                    &nbsp;69 Mohakhali C/A,
                                    Dhaka-1212</span></p>
                            </div>
                            <div><i className="fa fa-phone footer-contacts-icon"></i>
                                <p className="fw-lighter footer-center-info email text-start text-black">
                                    +8801775051478</p>
                            </div>
                            <div><i className="fa fa-envelope footer-contacts-icon"></i>
                                <p> <a href="#" target="_blank" className='text-secondary'
                                >support@happystudent.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 footer-about">
                            <h4>About the company</h4>
                            <p> Lorem ipsum dolor sit amet, consectateur adispicing
                                elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. </p>
                            <div className="social-links social-icons"><a href="#"><FaFacebookF /></a><a href="#">
                                <FaTwitter />
                            </a></div>
                        </div>
                    </div>
                    <footer className="text-center py-4 bg-white mt-0">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-lg-3">
                                <div className="col"></div>
                                <div className="col p-3">
                                    <p className="text-muted my-2 text-center">
                                        Copyright&nbsp;© 2023 Happy Students</p>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    </footer>
                </footer>
            </footer>
        </>
    );
};

export default Footer;