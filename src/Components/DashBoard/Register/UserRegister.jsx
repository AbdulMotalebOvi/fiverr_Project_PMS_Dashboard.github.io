import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowUpTrayIcon, CameraIcon } from '@heroicons/react/24/solid';
import styles from './Register.module.css';
import SearchBar from '../SearchPage/SearchBar';


export default function UserRegister() {
    const [files, setFiles] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    // birthdate

    const days = Array.from({ length: 31 }, (_, index) => index + 1); // Array with values 1 to 31
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const years = Array.from({ length: 100 }, (_, index) => 2023 - index); // Array of years from 2023 to 1924

    const fileInputRef = useRef(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const submit = async (data) => {
        console.log(data);
    };

    const uploadHandler = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // camera
    const videoRef = useRef(null);

    const openCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error opening camera:', error);
        }
    };


    return (
        <>
            <SearchBar />
            <h1 className='text-[36px] text-[#252525] mt-[35px] '>Register Prisoner</h1>
            <form onSubmit={handleSubmit(submit)} className='w-full flex flex-col justify-center'>
                <div className='form-control space-y-5 mt-8'>
                    {/*  First Name  */}
                    <div>
                        <label className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                            <input
                                className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                                {...register('firstname', { required: true })}
                            />
                            <span className='absolute start-0 top-2 -translate-y-1/2 text-[13px] text-[#969696]transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]'>
                                First Name
                            </span>
                            {errors.firstname?.type === 'required' && (
                                <p className='text-red-600 font-semibold'> First Name is required</p>
                            )}
                        </label>
                    </div>
                    {/*  Last Name  */}
                    <div>
                        <label className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                            <input
                                className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                                {...register('lastname', { required: true })}
                            />
                            <span className='absolute start-0 top-2 -translate-y-1/2 text-[13px] text-[#969696]transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]'>
                                Last Name
                            </span>
                            {errors.lastname?.type === 'required' && (
                                <p className='text-red-600 font-semibold'> Last Name is required</p>
                            )}
                        </label>
                    </div>

                    {/* date of birth */}
                    <div className='grid grid-cols-4 gap-4'>
                        <h5 className='text-[14px] border-b-2'>Date of birth</h5>
                        <select
                            className='relative block overflow-hidden border-b  bg-transparent pt-3 focus-within:border-blue-600'
                            {...register('date', { required: true })}
                        >
                            <option value='' disabled>Select Day</option>
                            {days.map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select
                            className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'
                            {...register('month', { required: true })}
                        >
                            <option value='' disabled>Select Month</option>
                            {months.map((month, index) => (
                                <option key={index} value={index + 1}>{month}</option>
                            ))}
                        </select>
                        <select
                            className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'
                            {...register('year', { required: true })}
                        >
                            <option value='' disabled>Select Year</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    {/*  Address  */}
                    <div>
                        <label className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                            <input
                                className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                                {...register('address', { required: true })}
                            />
                            <span className='absolute start-0 top-2 -translate-y-1/2 text-[13px] text-[#969696]transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]'>
                                Adsress
                            </span>
                            {errors.address?.type === 'required' && (
                                <p className='text-red-600 font-semibold'>    Adsress is required</p>
                            )}
                        </label>
                    </div>
                    {/*  Next of Kin  */}
                    <div>
                        <label className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                            <input
                                className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                                {...register('next', { required: true })}
                            />
                            <span className='absolute start-0 top-2 -translate-y-1/2 text-[13px] text-[#969696]transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]'>
                                Next  of Kin
                            </span>
                            {errors.next?.type === 'required' && (
                                <p className='text-red-600 font-semibold'>  Next of Kin is required</p>
                            )}
                        </label>
                    </div>
                    {/* Physical Description */}
                    <div>
                        <label className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'>
                            <input
                                className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                                {...register('description', { required: true })}
                            />
                            <span className='absolute start-0 top-2 -translate-y-1/2 text-[13px] text-[#969696]transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]'>
                                Physical Description
                            </span>
                            {errors.description?.type === 'required' && (
                                <p className='text-red-600 font-semibold'>  Physical Description is required</p>
                            )}
                        </label>
                    </div>
                    {/* Release Date*/}
                    <div className='grid grid-cols-4 gap-4'>
                        <h5 className='text-[14px] border-b-2'>Release Date</h5>
                        <select
                            className='relative block overflow-hidden border-b  bg-transparent pt-3 focus-within:border-blue-600'
                            {...register('date', { required: true })}
                        >
                            <option value='' disabled>Select Day</option>
                            {days.map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                        <select
                            className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'
                            {...register('month', { required: true })}
                        >
                            <option value='' disabled>Select Month</option>
                            {months.map((month, index) => (
                                <option key={index} value={index + 1}>{month}</option>
                            ))}
                        </select>
                        <select
                            className='relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600'
                            {...register('year', { required: true })}
                        >
                            <option value='' disabled>Select Year</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    {/* upload image , capture */}
                    <div className='flex items-center '>

                        <> {selectedFile ? <img className='w-[300px]' src={previewUrl} alt='Preview' />
                            :
                            <h5 className='text-[14px] border-b-2'>Prisoner Image</h5>
                        }</>

                        <div className='ml-5 flex items-center space-x-4'>
                            <label className='relative block overflow-hidden border-b border-gray-200 bg-transparent  focus-within:border-blue-600'>
                                <div className={styles.file_card}>
                                    <div className={styles.file_inputs}>
                                        <input type="file" onChange={uploadHandler} ref={fileInputRef} />
                                        <button
                                            onClick={() => {
                                                fileInputRef.current.click();
                                            }}
                                        >
                                            <i>
                                                <ArrowUpTrayIcon className='h-6 w-6 text-black' />
                                            </i>
                                            Upload
                                        </button>
                                    </div>
                                </div>

                                {errors.file?.type === 'required' && (
                                    <p className='text-red-600 font-semibold'>File is required</p>
                                )}
                            </label>
                            <div onClick={openCamera} className='btn btn-outline flex items-center justify-between mb-5 text-[#839C11]'>Capture <span><CameraIcon className='h-5 w-5 ' /></span> </div>

                            <div>
                                <video ref={videoRef} autoPlay playsInline />
                            </div>
                        </div>
                    </div>
                </div>
                {/* register button */}
                <div className='mb-6'>
                    <button className='btn bg-[#839C11] text-white btn-wide text-center' title='login'>
                        Register
                    </button>
                </div>
            </form>
        </>
    );
}
