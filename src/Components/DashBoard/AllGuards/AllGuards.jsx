import React from 'react'

export default function AllGuards() {
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
        // Add more prisoners' data here if needed
    ];

    return (
        <>
            <h1 className='text-[36px] text-[#252525] mt-[35px] mb-2 '>All Guards</h1>
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
        </>
    );

}
