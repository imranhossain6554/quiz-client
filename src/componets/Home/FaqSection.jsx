import React from 'react';
import './FaqSection.css';
import '../../assets/fonts/font-awesome.min.css'
import '../../assets/fonts/fontawesome-all.min.css'
import '../../assets/fonts/fontawesome5-overrides.min.css'
import '../../assets/css/aos.min.css'
import '../../assets/css/Footer-Clean-icons.css'
import '../../assets/css/Pretty-Footer-.css'
import '../../assets/css/Projects-Grid-images.css'
const FaqSection = () => {
    return (
        <>
            <section data-aos="fade-up" data-aos-duration="250" data-aos-delay="450" className="py-4 py-xl-5 mb-5">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="d-6 fw-bold mb-5"><span className="pb-3 FAQ">FAQ <br /> </span></h2>
                            <p className="text-muted mb-5">Get Every General Answers From Here!</p>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div class="col-md-8 mx-auto">
                            <div className="accordion text-muted" role="tablist" id="accordion-1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1"
                                        aria-expanded="false" aria-controls="accordion-1 .item-1">Aenean arcu euismod
                                        aliquam, volutpat consequat?</button></h2>
                                    <div className="accordion-collapse collapse item-1" role="tabpanel"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p>Maecenas diam volutpat, erat quis enim cras lobortis vivamus donec tempor. Congue
                                                ultrices donec turpis vivamus. Laoreet aenean metus, mi nunc massa feugiat duis.
                                                Pharetra erat consequat purus curae quisque, etiam accumsan class.</p>
                                            <p className="mb-0">Commodo rutrum quisque curabitur habitasse, suspendisse etiam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2"
                                        aria-expanded="false" aria-controls="accordion-1 .item-2">Lorem quam erat placerat
                                        mollis, rhoncus senectus?</button></h2>
                                    <div className="accordion-collapse collapse item-2" role="tabpanel"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className
                                                ="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
                                                odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta
                                                gravida at eget metus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3"
                                        aria-expanded="false" aria-controls="accordion-1 .item-3">How long it take to create
                                        a video course?</button></h2>
                                    <div className="accordion-collapse collapse item-3" role="tabpanel"
                                        data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <p className="mb-0">Creating a video course can take anywhere from a few weeks to
                                                several months, depending on various factors such as the length of the course,
                                                the complexity of the content, and the production quality.</p>
                                        </div>
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

export default FaqSection;