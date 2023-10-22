import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  sticky-top bg-white ">
                <div className="container">
                    <Link className="navbar-brand" to="/"><span className='title_text'>Happy Students</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link  home_text" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link  fs-6' activeClassName="active" to='/courses'>Courses</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='nav-link  fs-6' activeClassName="active" to='/blog'>Blog</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link  fs-6' activeClassName="active" to='/faq'>FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link  fs-6' activeClassName="active" to='/contacts'>Contacts</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className='nav-link' activeClassName="active" to='/dashboard'>
                                    <button type="button" class="btn btn-dark rounded">DashBoard</button>
                                </NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className='nav-link' activeClassName="active" to='/submitquestions'>
                                    <button type="button" class="btn btn-dark rounded">Submit</button>
                                </NavLink>
                            </li> */}
                        </ul>
                        <div >
                            <Link to="/login" className='text-decoration-none text-black fs-6'>Login</Link>
                            <Link to="/signup" className='ms-3 signUp'>Sign Up</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;