import React from 'react';
import rightImage from '../../../assets/banner/banner_Img.jpg';
import logo from '../../../assets/logo/logo.png'
import { Outlet } from 'react-router-dom';

export default function Main() {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4'>
            <section className='pl-5 md:pl-[115px] py-5 md:py-0'>
                {/* logo part */}
                <div className='flex items-center space-x-2 my-2'>
                    <img src={logo} className='w-[75px] h-[55px]' alt="logo" />
                    <div className='text-[#839C11]'>
                        <h2 className='text-xl md:text-3xl h-[45px]'>PMS</h2>
                        <p className='text-xs md:text-base'>PRISON MANAGEMENT SYSTEM</p>
                    </div>
                </div>
                {/* content */}
                <Outlet></Outlet>
            </section>
            {/* rightImage */}
            <section className='md:fixed md:top-0 md:right-0 md:bottom-0'>
                <img className='object-cover w-full  md:w-[700px] h-full' src={rightImage} alt='' />
            </section>
        </main>

    );
}
