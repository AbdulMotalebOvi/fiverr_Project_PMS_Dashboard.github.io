import React from 'react'
import { ArrowRightOnRectangleIcon, Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function SearchBar() {
    return (
        <div className='bg-white rounded-2xl py-2 shadow-md'>
            <div className='flex flex-col md:flex-row items-center justify-between  px-4 md:px-8'>
                {/* search part */}
                <div className="relative flex-1 ">
                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full border-none focus:border-transparent ml-5 focus:outline-none rounded-md   ps-10 sm:text-sm"
                    />

                    <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon className='h-6 w-6 text-black' />
                        </button>
                    </span>
                </div>

                {/* profile */}
                <div className="dropdown dropdown-end px-4 ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] px-6 py-4 shadow dropdown-content bg-base-100 rounded-[5px] text-center border md:w-[280px]">
                        <div className="w-[110px] h-[110px] border rounded-full m-auto">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                        </div>
                        <div>
                            <h4 className='text-xl md:text-2xl font-semibold'>Susan Okoro</h4>
                            <h5 className='text-base md:text-lg text-[#969696]'>@susan780</h5>
                        </div>

                        <div className='flex justify-between items-center text-center mt-4 md:mt-6'>
                            <Link className='flex justify-between items-center text-[#252525] text-base md:text-lg font-semibold'>
                                Settings
                                <span className='mx-1'><Cog6ToothIcon className="h-4 w-4 text-black" /></span>
                            </Link>
                            <span className='text-[#969696]'>|</span>
                            <Link className='flex justify-between items-center text-base md:text-lg text-[#252525] font-semibold'>Log Out <span className='mx-1'><ArrowRightOnRectangleIcon className="h-4 w-4 text-black" /></span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
