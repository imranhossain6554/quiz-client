import React from 'react';
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
import lottie from '../../../public/lottie.json';
const ErrorPage = () => {
    return (
        <section>
            <div className='d-flex justify-content-center h-100 p-4 bg-light text-dark'>
                <Lottie animationData={lottie} ></Lottie><br /><br />
                <div className='ml-auto'>
                    <Link
                        to='/'
                        className='rounded bg-warning text-dark px-4 py-3 text-center font-weight-bold  mt-4'
                    >
                        Please Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
