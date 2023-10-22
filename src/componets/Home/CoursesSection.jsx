import React from 'react';
import CountUp from 'react-countup';
import './CoursesSection.css';
import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
const CoursesSection = () => {
    return (
        <>
            <section data-aos="fade-up" data-aos-duration="250" data-aos-delay="450">
                <div className="container py-4 py-xl-5">
                    <section className='bg-white'>
                        <div className="container text-white">
                            <div className="row">
                                <div className="col-md-6 col-lg-4 text-center  number-item love_counter pl-0">
                                    <h1 className="fw-lighter love_count fs-3 pl-0">
                                        <CountUp end={150} />+
                                    </h1>
                                    <h4 className="fw-lighter text-white mt-1 fs-6 pl-0 pt-3">
                                        STUDENTS ENROLLED
                                    </h4>
                                </div>
                                <div className="col-md-6 col-lg-4 fw-lighter text-center number-item love_counter  pl-0">
                                    <h1 className="fw-lighter love_count fs-3 pl-0">
                                        <CountUp end={30} />+
                                    </h1>
                                    <h4 className="fw-lighter text-white mt-2 fs-6 pl-0 pt-3">
                                        ACADEMIC PROGRAMS
                                    </h4>
                                </div>
                                <div className="col-lg-4 text-center number-item love_counter pl-0">
                                    <h1 className="fw-lighter love_count fs-3">
                                        <CountUp end={10} />+
                                    </h1>
                                    <h4 className='text-white mt-0 fs-6 pt-3'>
                                        ONLINE INSTRUCTOR
                                    </h4>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default CoursesSection;