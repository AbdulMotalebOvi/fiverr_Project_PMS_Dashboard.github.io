import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../assets/Animations/error.json'



const ErrorElement = () => {
    const error = useRouteError()
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <Lottie className='w-3/12 m-auto' animationData={animation} loop={true} />
                <p className='text-red-500'>Oops! Something went wrong!!</p>
                <p className='text-red-400'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <h2 className='btn btn-primary text-white my-2'> <Link >Sign Out</Link></h2>
            </div>

        </div>
    );
};

export default ErrorElement;