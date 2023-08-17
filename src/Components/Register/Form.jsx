import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


export default function Form() {
    const [error, setError] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const submit = async (data) => {
        console.log(data)
        if (data) {
            navigate('/dashboard')
        }
    }

    return (
        <div className="w-full">
            <div className="p-[5%] pl-0">
                <h3 className="text-3xl  mb-5">Add User </h3>
                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    <div className="form-control space-y-5 mt-8">
                        {/*  First Name  */}
                        <div>
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm " {...register("firstname", { required: true })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    First Name
                                </span>
                                {errors.email?.type === 'required' && <p className="text-red-600 font-semibold"> First Name is required</p>}
                            </label>
                        </div>
                        {/*  Last Name  */}
                        <div>
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm " {...register("lastname", { required: true })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Last Name
                                </span>
                                {errors.email?.type === 'required' && <p className="text-red-600 font-semibold"> Last Name is required</p>}
                            </label>
                        </div>
                        <div>
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm " {...register("email", { required: true })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Email
                                </span>
                                {errors.email?.type === 'required' && <p className="text-red-600 font-semibold">Email is required</p>}
                            </label>
                        </div>
                        {/* password */}
                        <div>
                            <label htmlFor="password" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    {...register("password", {
                                        required: true,
                                        minLength: { value: 6, message: 'Password must be at least 6 characters or longer' }
                                    })}
                                />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Password
                                </span>
                                <button
                                    className="absolute end-0 top-2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <EyeIcon className="h-6 w-6 text-black" /> : <EyeSlashIcon className="h-6 w-6 text-black" />}
                                </button>
                                <p className="text-red-600 font-semibold">{error}</p>
                                {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                            </label>
                        </div>

                    </div>
                    <div className="space-y-5 mt-5">
                        <button className='btn w-full text-center' title='login'>Add User</button>
                    </div>

                </form>
                <h4 className='my-3'> Already  have an account? <Link to='/SignIn' className="text-[16px] text-[#839C11]">Sign In</Link></h4>
            </div>
        </div>
    )
}
