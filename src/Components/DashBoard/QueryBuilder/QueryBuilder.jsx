import React from 'react'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, ExclamationCircleIcon, BellAlertIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import SerachFocus from './SerachFocus';
import ConditionDropdown from './ConditionDropdown';


export default function QueryBuilder() {

    const prisonersData = [
        // Add your prisoners' data here as an array of objects / use your api
        {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'Male',
            nationality: 'Bangladeshi',
            releaseDate: '08-16-2023',
            conviction: 'Text'
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'Male',
            nationality: 'Bangladeshi',
            releaseDate: '08-16-2023',
            conviction: 'Text'
        },
        // Add more prisoners' data here if needed /api
    ];
    return (
        <>
            <h1 className='text-[36px] text-[#252525] mt-[35px] mb-2 '>All Guards</h1>
            <div className='bg-white rounded-[5px]'>
                <div className='p-[32px]'>
                    <div className='flex justify-between items-center '>
                        <h4>Query Builder</h4>
                        <hr />
                        <div className='flex justify-between items-center space-x-5'>
                            <h4 >Clear All  </h4>
                            <span className='text-[#B3B3B3]'>|</span>
                            <ul className='flex justify-between space-x-5 items-center'>
                                <li> <ArrowUturnLeftIcon className="h-6 w-6 text-[#B3B3B3]" /></li>
                                <li> <ArrowUturnRightIcon className="h-6 w-6 text-[#B3B3B3]" /></li>
                            </ul>
                            <span className='text-[#B3B3B3]'>|</span>
                        </div>

                    </div>
                    <div className='mt-[60px] inline-flex items-center '>
                        <div className='flex items-center '>
                            <h5>Search Focus</h5>
                            <span><ExclamationCircleIcon className="h-6 w-6 text-black" /></span>
                        </div>

                    </div>
                    {/* serach focus */}
                    <SerachFocus />
                    {/* header part */}
                    <div className='mt-[20px] inline-flex items-center '>
                        <div className='flex items-center '>
                            <h5>Conditions</h5>
                            <span><ExclamationCircleIcon className="h-6 w-6 text-black" /></span>
                        </div>
                        <div className='flex items-center ml-10'>
                            <h5 className='text-[#839C11]'>Add Bracket [   ]</h5>
                        </div>

                    </div>
                    {/* add condition */}
                    <ConditionDropdown />
                    {/* query button */}
                    <div className='rounded-md mt-5 text-right'>
                        <ul className='inline-flex space-x-5 p-5 '>
                            <li className='border flex justify-between items-center space-x-2 p-2 rounded-[5px]'>
                                <BellAlertIcon className="h-4 w-4 text-black" />
                                <h4>Create Alert</h4>
                            </li>
                            <li className='border flex justify-between items-center space-x-2 p-2 rounded-[5px]'>
                                <PencilSquareIcon className="h-4 w-4 text-black" />
                                <h4>Create Report</h4>
                            </li>
                            <li className='bg-[#839C11] flex justify-between items-center space-x-2 p-2 rounded-[5px] text-xs text-white'>

                                <h4>Run Query</h4>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* table */}
            <div className='max-w-2xl mx-auto my-10'>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="px-4 py-2 font-semibold text-gray-900">
                                    First Name
                                </th>
                                <th className="px-4 py-2  font-semibold text-gray-900">
                                    Last Name
                                </th>
                                <th className="px-4 py-2   font-semibold   text-gray-900">
                                    Gender
                                </th>
                                <th className="px-4 py-2  font-semibold  text-gray-900">
                                    Nationality
                                </th>
                                <th className="px-4 py-2  font-semibold text-gray-900">
                                    Release Date
                                </th>
                                <th className="px-4 py-2 m  font-semibold  text-gray-900">
                                    Conviction
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 text-center">
                            {prisonersData.map((prisoner, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'even:bg-gray-50' : 'odd:bg-gray-50'}>
                                    <td className="px-4 py-2 font-medium text-gray-900 ">
                                        {prisoner.firstName}
                                    </td>
                                    <td className="px-4 py-2 text-gray-700">{prisoner.lastName}</td>
                                    <td className="px-4 py-2 text-gray-700">{prisoner.gender}</td>
                                    <td className="px-4 py-2 text-gray-700">{prisoner.nationality}</td>
                                    <td className="px-4 py-2 text-gray-700">{prisoner.releaseDate}</td>
                                    <td className="px-4 py-2 text-gray-700">{prisoner.conviction}</td>
                                    <td className="px-4 py-2 font-semibold text-black">:</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
