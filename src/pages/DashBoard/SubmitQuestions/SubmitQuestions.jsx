import React from 'react';
import './SubmitQuestions.css';
import { FaPlus } from "react-icons/fa";
const SubmitQuestions = () => {
    return (
        <>
            <section className='container'>
                <section className='mt-4'>
                    <div className="d-flex">
                        <h3 id='text-submit'><span className='text-submit'>Submit Yo</span>ur Questions</h3>
                        <input type="text" id='addCategory' placeholder='Add new category' />
                        <button className="btn btn-primary waves-effect waves-light mx-2 deviceSubmit" id='plus'>
                            <FaPlus />

                        </button>


                    </div>
                    <form>


                        <div className="row mt-4">
                            <div>
                                <label className='input-text' htmlFor="name">Title</label>
                                <input type="text" name='name' className="form-control input-text input-title" placeholder="Your Name" />
                            </div><br />
                            <div className="col mt-3">
                                <label htmlFor="email" className='input-text'>Instruction</label>
                                <input type="email" name='email' className="form-control input-field input-text" placeholder="Subject of your questions" />
                            </div>
                            <div className="col mt-3">
                                <label htmlFor="email" className='input-text'>Tag</label>
                                <input type="email" name='email' className="form-control input-field input-text" placeholder="Code, Node JS,JS" />
                            </div>
                            <div className="col mt-3">
                                <label htmlFor="email" className='input-text'>Published</label>
                                <input type="email" name='email' className="form-control input-field input-text" placeholder="10/15/2023" />
                            </div>
                            <div className="col mt-3">
                                <label htmlFor="email" className='input-text'>Close Date</label>
                                <input type="email" name='email' className="form-control input-field input-text" placeholder="15/15/2023" />
                            </div>
                            <div className="col mt-3">
                                <label htmlFor="email" className='input-text'>Total Mark</label>
                                <input type="email" name='email' className="form-control input-field input-text" placeholder="100" />
                            </div>


                            <div class=" col mt-3">
                                <label htmlFor="email" className='input-text'>Quiz Category</label>
                                <select class="form-select form-control input-field input-text" id="floatingSelect" aria-label="Floating label select example">

                                    <option value="1">Flutter</option>
                                    <option value="2">Node JS</option>
                                    <option value="3">Java</option>
                                </select>
                            </div>
                        </div><br />
                        <button className='file_submit mt-5'>Submit</button>
                    </form>

                </section>
            </section>
        </>
    );
};

export default SubmitQuestions;
