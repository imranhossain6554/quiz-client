import React from 'react';
import '../../../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import OverView from '../OverView/OverView';
// import QuizView from '../QuizView/QuizView';
const Sidebar = () => {
    return (
        <>
            <h1 id='overview'><span id='ove'>Ove</span>rview</h1>

            <section className='d-flex gap-5' id='sidebar_down'>
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block">
                    <div className="position-sticky">
                        <h1 id='details'>Details</h1>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button id='settings'><i className="fa fa-cog logo" aria-hidden="true"></i></button> <span className='sidebar-text'>Settings</span>
                                </a>
                            </li><br />
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button id='questions'><i className="fa fa-cog logo" aria-hidden="true"></i></button>   <span className='sidebar-text'>Questions</span>
                                </a>
                            </li><br />
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button id='document'><i className="fa fa-cog logo" aria-hidden="true"></i></button>   <span className='sidebar-text'>Document</span>
                                </a>
                            </li><br />
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button id='statistics'><i className="fa fa-cog logo" aria-hidden="true"></i></button>   <span className='sidebar-text'>Statistics</span>
                                </a>
                            </li><br />
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <button id='activity'><i className="fa fa-cog logo" aria-hidden="true"></i></button>
                                    <span className='sidebar-text'>Activity</span>
                                </a>
                            </li>
                        </ul><br /><br />
                        <img className='logOut' src="https://cdn.icon-icons.com/icons2/2941/PNG/512/logout_icon_183821.png" alt="" />
                        <Link className='text-logOut'>   Log Out</Link>
                    </div>
                </nav>
                <OverView />
                {/* <QuizView /> */}
            </section>
        </>
    );
};

export default Sidebar;