import React from 'react';
import { Helmet } from "react-helmet-async";
import './Blog.css';
import illustrations1 from '../../assets/img/illustrations/data-management.svg'
import illustrations2 from '../../assets/img/illustrations/desk.svg'
import illustrations3 from '../../assets/img/illustrations/javascript.svg'
import illustrations4 from '../../assets/img/illustrations/meeting.svg'
import illustrations5 from '../../assets/img/illustrations/ranking.svg'
import illustrations6 from '../../assets/img/illustrations/web-development.svg'
const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Happy Students - Blog</title>
            </Helmet>
            <section className="py-5">
                <div className="container py-4 py-xl-5 blog">
                    <div className="row mb-5">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2>Blog</h2>
                            <p>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
                        </div>
                    </div>
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <div className="col">
                            <div>
                                <img className="rounded img-fluid d-block w-100 fit-cover illustrations" src={illustrations1}></img>

                                <div className="py-4">
                                    <h4>Lorem libero donec</h4>
                                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src={illustrations2} className='rounded img-fluid d-block w-100 fit-cover illustrations' alt="" />


                                <div className="py-4">
                                    <h4>Lorem libero donec</h4>
                                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src={illustrations3} className="rounded img-fluid d-block w-100 fit-cover illustrations" alt="" />

                                <div className="py-4">
                                    <h4>Lorem libero donec</h4>
                                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src={illustrations4} className="rounded img-fluid d-block w-100 fit-cover illustrations" alt="" />

                                <div className="py-4">
                                    <h4>Lorem libero donec</h4>
                                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src={illustrations5} className="rounded img-fluid d-block w-100 fit-cover illustrations" alt="" />

                                <div className="py-4">
                                    <h4>Lorem libero donec</h4>
                                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src={illustrations6} className="rounded img-fluid d-block w-100 fit-cover illustrations" alt="" />

                                <div className="py-4">
                                    <h4>Lorem libero donec</h4>
                                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;