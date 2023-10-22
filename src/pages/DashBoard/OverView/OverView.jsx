import React from 'react';
import './OverView.css';
const OverView = () => {
    return (
        <>

            <section>

                <div className='d-flex gap-3'>
                    <div>
                        <div className='d-flex gap-2'>

                            <div id='submitted'>
                                <h3 id='submiited-number'>06</h3>
                                <small className='submit-text'>Questions</small>
                            </div>
                            <div className='border shadow' id='post'>
                                <h3 id='post-number'>150</h3>
                                <small id='post-text'>Post Views</small>
                            </div>
                            <div className='border shadow' id='profile'>
                                <h3 id='profile-number'>30</h3>
                                <small id='profile-text'>Profile Visited</small>
                            </div>
                        </div><br /><br />
                        <p className='border shadow' id='input-questions'><span id='questions-text'>Your Questions</span></p>
                        <br /><br />
                        <div className='border shadow' id='flutter'>
                            <h5 id='flutter-text'>what should i learn first java or flutter for android development?
                            </h5>
                            <p className='paragraph-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis duis adipiscing sed risus fames. Vel ultricies duis leo diam purus tristique lectus auctor duis. Suspendisse commodo lobortis ut sit sed nunc id. Quam dolor, eu semper diam, id netus massa nisl nunc. Metus eget integer aliquam adipiscing tortor enim tortor nunc. <br />Quam pharetra augue tellus pellentesque porttitor mattis. Viverra elit non suspendisse lectus facilisi vitae facilisis ultrices.
                            </p>

                            <button id='view'>
                                <span id='comments'>View All Comments</span>
                            </button>
                            <button id='edit'>
                                <span id='quiz'>Edit Quiz</span>
                            </button>
                        </div>
                    </div>
                    <div id='right_side'>
                        <div className='biodata mt-4'>
                            <img id='image' src="../../../../public/education.gif" alt="image missing" />
                            <h5 id='image-text'>Natayla Herington</h5>
                            <p id='cse'>Dep't of CSE</p>
                        </div>
                        <div className='d-flex'>
                            <h4 className='activities'>Last Activites</h4>
                            <a href="#" id='seeAll'>See All</a>
                        </div><br /><br />
                        <div>
                            <p className='question_submit'>
                                <img id='question-imge' src="https://www.citypng.com/public/uploads/preview/hd-whatsapp-green-double-tick-check-mark-icon-png-31623350533wzcayxjnia.png" alt="" />
                                You submit a question: What should i
                                learn first Andro...</p>
                            <p className='question_submit'>
                                <img id='questionSubmit-imge' src="https://www.citypng.com/public/uploads/preview/hd-whatsapp-green-double-tick-check-mark-icon-png-31623350533wzcayxjnia.png" alt="" />
                                Your Question has accept to our platform  and you can share...</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OverView;