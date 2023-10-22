import React from 'react';
import './QuizViewDescription.css';
const QuizViewDescription = () => {
    return (
        <>
            <section className='container mt-5'>
                <h1 className='quiz-view-heading'><span id='quiz-view-color'>Submit Answer</span></h1>

                <div>
                    <h1 className='quiz-view-flutter'>1. Who developed the Flutter Framework and continues to maintain it today?</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Facebook
                            </label>
                        </div>
                        <div class="form-check" id='google'>
                            <input class="form-check-input" type="radio" id='google-radio' name="flexRadioDefault" checked />
                            <label id='google-color' >
                                Google
                            </label>
                            {/* class="form-check-label" for="flexRadioDefault2"*/}
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio"
                                name="flexRadioDefault" id="microsoft-radio" />
                            <label>
                                <a href="" id='microsoft-color'>Microsoft</a>
                            </label>
                        </div>
                        <div class="form-check quiz-option">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Oracle
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>2. Which programming language is used to build Flutter applications?</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Katlin
                            </label>
                        </div>
                        <div class="form-check " id='dart'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Dart
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Java
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='go'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Go
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>3. How many types of widgets are there in Flutter?</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                2
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='four'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                4
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                6
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='eight'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            {/* id="flexRadioDefault2" */}
                            <label class="form-check-label" for="flexRadioDefault2">
                                8+
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>4. How many types of widgets are there in Flutter?</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                AOT(ahed-of-time)
                            </label>
                        </div>
                        <div class="form-check quiz-option">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                JIT(Just-in-time)
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Transcompilation
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='recompilation'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            {/* id = "flexRadioDefault2" */}
                            <label class="form-check-label" for="flexRadioDefault2">
                                Recompilation
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>5. When building for iOS, Flutter is restricted to an __ compilation strategy?</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Flow
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='current'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            {/* id="flexRadioDefault2" */}
                            <label class="form-check-label" for="flexRadioDefault2">
                                Current
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Stream
                            </label>
                        </div>
                        <div class="form-check quiz-option">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Series
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>6. A sequence of asynchronous Flutter events is known as a:</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                SQLite
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='firebase-database'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            {/* id="flexRadioDefault2" */}
                            <label class="form-check-label" for="flexRadioDefault2">
                                Firebase Database
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                NOSQL
                            </label>
                        </div>
                        <div class="form-check quiz-option">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                MYSQL
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>7. A sequence of asynchronous Flutter events is known as a:</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Unit tests
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='widget-tests'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            {/* id="flexRadioDefault2" */}
                            <label class="form-check-label" for="flexRadioDefault2">
                                Widget tests
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Integration Tests
                            </label>
                        </div>
                        <div class="form-check quiz-option">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                All of the above
                            </label>
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='quiz-view-flutter'>8. What type of test can examine your code as a complete system?</h1>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Widgets
                            </label>
                        </div>
                        <div class="form-check quiz-option" id='keys'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Keys
                            </label>
                        </div>

                    </div>
                    <div className='d-flex quiz-option'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" />
                            {/* id="flexRadioDefault1" */}
                            <label class="form-check-label" for="flexRadioDefault1">
                                Elements
                            </label>
                        </div>
                        <div class="form-check quiz-option">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" checked />
                            {/* id="flexRadioDefault2" */}
                            <label class="form-check-label" for="flexRadioDefault2">
                                Serial
                            </label>
                        </div>

                    </div>

                </div>

                <div>
                <button class="button">
                    <div class="button-overlay"></div>
                    <span>Submit<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 53 58" height="58" width="53">
                    <path stroke-width="9" stroke="currentColor" d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"></path>
                    </svg></span>
  
                </button>
                </div>


            </section>


        </>
    );
};

export default QuizViewDescription;