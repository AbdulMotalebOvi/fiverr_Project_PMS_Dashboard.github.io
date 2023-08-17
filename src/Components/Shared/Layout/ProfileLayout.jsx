import React from 'react';
import SearchBar from '../../DashBoard/SearchPage/SearchBar';
import profileImage from '../../../assets/banner/profile.jpg';
import { PrinterIcon } from '@heroicons/react/24/solid';

export default function ProfileLayout() {
    return (
        <div className="bg-[#F7F7F7]">
            <div className='pt-[35px] pl-[30px] pr-[110px]'>
                {/* Page content here */}
                <SearchBar />
                <div className='flex justify-between py-10 items-center'>
                    <div className='flex-1 '>
                        <h3 className='text-[#839C11] text-[32px]'>Personal Details</h3>
                        {/* 1st 4  */}
                        <div className='mt-[25px] space-y-3 flex flex-wrap'>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">First Name</span>
                                <h4 className="text-[24px] font-semibold">Ezihe</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Last Name</span>
                                <h4 className="text-[24px] font-semibold">Ezihe</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Date of Birth</span>
                                <h4 className="text-[24px] font-semibold">04/08/1978</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Gender</span>
                                <h4 className="text-[24px] font-semibold">Male</h4>
                            </div>

                        </div>
                        {/* 2nd 3rd */}
                        <div className='mt-[25px] space-y-3 flex flex-wrap'>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Nationality</span>
                                <h4 className="text-[24px] font-semibold">Morocco</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">State of Origin</span>
                                <h4 className="text-[24px] font-semibold">Enugu</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">LGA</span>
                                <h4 className="text-[24px] font-semibold">Awgu</h4>
                            </div>
                        </div>
                        {/* 3rd 2 */}
                        <div className='mt-[25px] space-y-3 flex flex-wrap'>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Marital  Status</span>
                                <h4 className="text-[24px] font-semibold">Married</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Next of Kin</span>
                                <h4 className="text-[24px] font-semibold">Mr. Daniel Obi</h4>
                            </div>

                        </div>
                        {/* address */}
                        <div className=' my-3'>
                            <span className="text-[#839C11] text-[14px]">Address</span>
                            <h4 className="text-[24px] font-semibold">No. 25 Segun Awolowo Street, Jos, Plateau State.</h4>
                        </div>
                        {/* 4th 2 */}
                        <div className='mt-[25px] space-y-3 flex flex-wrap'>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">First Name</span>
                                <h4 className="text-[24px] font-semibold">Ezihe</h4>
                            </div>
                            <div className='w-1/4'>
                                <span className="text-[#839C11] text-[14px]">Last Name</span>
                                <h4 className="text-[24px] font-semibold">Ezihe</h4>
                            </div>
                        </div>
                        <div className='my-3'>
                            <span className="text-[#839C11] text-[14px]">Charges</span>
                            <h4 className="text-[24px] font-semibold">2 Counts of Armed Robbery & Second Degree Murder</h4>
                        </div>
                        <div className='my-3'>
                            <span className="text-[#839C11] text-[14px]">Charges</span>
                            <h4 className="text-[24px] font-semibold">1 Counts of Armed Robbery & Second Degree Murder</h4>
                        </div>

                        <div className='mt-[25px] space-y-3 flex items-center flex-wrap'>
                            <div className='w-1/3'>
                                <span className="text-[#839C11] text-[14px]">Presiding Convicting Judgee</span>
                                <h4 className="text-[24px] font-semibold">Judge Henrietta George</h4>
                            </div>

                            <div className='w-1/3'>
                                <span className="text-[#839C11] text-[14px]">Cell ID</span>
                                <h4 className="text-[24px] font-semibold">1002</h4>
                            </div>

                        </div>
                    </div>
                    <div className='flex-shrink-0 '>
                        <img src={profileImage} alt="" />
                        <button className="m-auto mt-[50px] text-white btn btn-wide  flex bg-[#839C11] hover:text-black ">
                            Print Prisoner Details
                            <PrinterIcon className="text-white hover:text-black h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
