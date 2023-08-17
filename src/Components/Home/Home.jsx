import React from 'react'

import ButtonWhite from '../../ButtonBlack/ButtonWhite'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles}>
            {/* details part */}
            <div className='mt-[15%] md:mt-[30%]'>
                <h1 className='text-2xl md:text-4xl leading-tight tracking-tight'>
                    <span className='bg-gradient-to-r text-transparent bg-clip-text from-[#839C11] to-[#A0BA28] block md:inline'>
                        Secure and <br className='md:hidden lg:block ' /> Efficient:
                    </span>
                    <br className='md:hidden lg:block ' /> Redefining Prison <br className='md:hidden  lg:block' /> Management <br /> Services
                </h1>
                {/* authintication part */}
                <div className='flex flex-col md:flex-row   space-y-2 md:space-y-0 md:space-x-2 mt-8 md:mt-[50px]'>
                    <Link to='SignIn'>
                        <Button title='Sign In' />
                    </Link>
                    <Link to='SignUp'>
                        <ButtonWhite title='Sign Up' />
                    </Link>
                </div>
            </div>
        </div>

    )
}
