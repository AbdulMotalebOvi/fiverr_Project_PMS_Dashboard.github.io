import React from 'react'
import Stats from './Stats'
import SearchBar from './SearchBar'


export default function SearchPage() {
    return (
        <>
            {/* serach bar */}
            <SearchBar />
            <h1 className='text-[36px] text-[#252525] mt-[35px] '>Dashboard</h1>
            {/* rest content */}
            <div className="bg-gradient-to-br from-[#839C11] to-[#A0BA28] h-[170px] mt-2 flex justify-between rounded-[5px] drop-shadow-2xl overflow-hidden">
                <div className="flex justify-center items-center space-x-2 mt-2">
                    <h4 className="text-[#FCFCFD] pl-[40px] text-[14px]">
                        <span className='text-[32px]'>Welcome Back!</span> <br />
                        Daniel Agba Macbook
                    </h4>
                </div>
                {/* svg */}
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" className='none sm:block' width="402" height="80" viewBox="0 0 402 114" fill="none">
                        <rect width="231.731" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint0_linear_221_16808)" />
                        <rect width="231.731" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint1_linear_221_16808)" />
                        <defs>
                            <linearGradient id="paint0_linear_221_16808" x1="0" y1="0" x2="231.731" y2="231.731" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C4C4C4" stopOpacity="0.22" />
                                <stop offset="0.841856" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_221_16808" x1="0" y1="0" x2="231.731" y2="231.731" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C4C4C4" stopOpacity="0.22" />
                                <stop offset="0.841856" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg></li>
                    <li className='relative before:absolute top-[-40px]'><svg xmlns="http://www.w3.org/2000/svg" width="402" height="80" viewBox="0 0 402 114" fill="none">
                        <rect width="231.731" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint0_linear_221_16808)" />
                        <rect width="231.731" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint1_linear_221_16808)" />
                        <defs>
                            <linearGradient id="paint0_linear_221_16808" x1="0" y1="0" x2="231.731" y2="231.731" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C4C4C4" stopOpacity="0.22" />
                                <stop offset="0.841856" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_221_16808" x1="0" y1="0" x2="231.731" y2="231.731" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C4C4C4" stopOpacity="0.22" />
                                <stop offset="0.841856" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg></li>
                    <li className='relative before:absolute top-[-60px]'><svg xmlns="http://www.w3.org/2000/svg" width="402" height="80" viewBox="0 0 402 114" fill="none">
                        <rect width="231.731" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint0_linear_221_16808)" />
                        <rect width="231.731" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint1_linear_221_16808)" />
                        <defs>
                            <linearGradient id="paint0_linear_221_16808" x1="0" y1="0" x2="231.731" y2="231.731" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C4C4C4" stopOpacity="0.22" />
                                <stop offset="0.841856" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_221_16808" x1="0" y1="0" x2="231.731" y2="231.731" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C4C4C4" stopOpacity="0.22" />
                                <stop offset="0.841856" stopColor="#C4C4C4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg></li>

                </ul>
            </div>
            <h1 className='text-[28px] text-[#252525] mt-[35px] '>Stats</h1>
            <Stats />
        </>

    )
}
