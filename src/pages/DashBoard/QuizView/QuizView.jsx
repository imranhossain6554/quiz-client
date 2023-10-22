import React from 'react';
import './QuizView.css';
import { Link } from 'react-router-dom';
// import Sidebar from '../Sidebar/Sidebar';
const QuizView = () => {
    return (
        <>
            <h1 id='quizview'><span id='ove'>Qui</span>z View</h1>

            <section className='d-flex gap-5 container' id='sidebar_down'>
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

                <div>
                    <div className='quiz-view-description'>
                        <h1 className='quiz-view-heading'>What should i learn first java or flutter for android development</h1>
                        <ul className='quiz-view-text'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames. Vel ultricies duis leo diam purus tristique lectus auctor duis. Suspendisse commodo lobortis ut sit sed nunc id. Quam dolor, eu semper diam, id netus massa nisl nunc.

                            </li>
                            <li> Metus eget integer aliquam adipiscing tortor enim tortor nunc. Quam pharetra augue tellus pellentesque porttitor mattis. Viverra elit non suspendisse lectus facilisi vitae facilisis ultrices.</li>
                        </ul>
                        <button id='view'>
                            <span id='comments'>View All Comments</span>
                        </button>
                    </div><br />
                    <div className='quiz-view-description'>
                        <h1 className='quiz-view-heading'>What should i learn first java or flutter for android development</h1>
                        <ul className='quiz-view-text'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames. Vel ultricies duis leo diam purus tristique lectus auctor duis. Suspendisse commodo lobortis ut sit sed nunc id. Quam dolor, eu semper diam, id netus massa nisl nunc.

                            </li>
                            <li> Metus eget integer aliquam adipiscing tortor enim tortor nunc. Quam pharetra augue tellus pellentesque porttitor mattis. Viverra elit non suspendisse lectus facilisi vitae facilisis ultrices.</li>
                        </ul>
                        <button id='view'>
                            <span id='comments'>View All Comments</span>
                        </button>
                    </div><br />
                    <div className='quiz-view-description'>
                        <h1 className='quiz-view-heading'>What should i learn first java or flutter for android development</h1>
                        <ul className='quiz-view-text'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames. Vel ultricies duis leo diam purus tristique lectus auctor duis. Suspendisse commodo lobortis ut sit sed nunc id. Quam dolor, eu semper diam, id netus massa nisl nunc.

                            </li>
                            <li> Metus eget integer aliquam adipiscing tortor enim tortor nunc. Quam pharetra augue tellus pellentesque porttitor mattis. Viverra elit non suspendisse lectus facilisi vitae facilisis ultrices.</li>
                        </ul>
                        <button id='view'>
                            <span id='comments'>View All Comments</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuizView;