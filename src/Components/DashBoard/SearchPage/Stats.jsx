import React from 'react';

export default function Stats() {
    const data = [
        {
            "total": 5482,
            "description": "Total Prisoners"
        },
        {
            "total": 762,
            "description": "Prisoners Awaiting  Trial"
        },
        {
            "total": 1450,
            "description": "Convicted Prisoners"
        },
        {
            "total": 75,
            "description": "Prison Guards"

        }
    ]

    return (

        <div className='grid grid-cols-1 sm:grid-cols-2  gap-8'>

            {
                data.map((nm, i) =>
                    <div key={i} className="card  bg-gradient-to-br from-[#839C11] to-[#A0BA28] text-primary-content rounded-[5px] drop-shadow-2xl ">
                        <div className=' grid grid-cols-2 '>
                            <div className="card-body  ">
                                <h4 className="text-[80px] h-[100px] text-white">{nm.total}</h4>
                                <h5>{nm.description}</h5>
                            </div>
                            <ul className='mt-5'>
                                <li className='left-5'><svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 402 114" fill="none">
                                    <rect width="100" height="231.731" transform="matrix(0.866025 0.5 -0.866025 0.5 201.208 0.647507)" fill="url(#paint0_linear_221_16808)" />
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
                                <li className='relative before:absolute top-[-40px] left-5'><svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 402 114" fill="none">
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
                                <li className='relative before:absolute top-[-80px] left-5'><svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 402 114" fill="none">
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

                    </div>
                )
            }


        </div >
    );
}
