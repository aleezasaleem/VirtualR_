import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaGoogle, FaInstagram } from 'react-icons/fa6'


const SignIn = () => {
    return (
        <div className='mt-7 mb-5 flex justify-center items-center'>
            <div className='border border-orange-900  mx-20 mt-16 max-w-300 min-w-300  sm:w-1/2 md:w-1/2 lg:w-1/3 pt-6  '>
                <h3 className='text-4xl font-bold text-center'>Login</h3>
                <div className='flex flex-col justify-center items-center pt-12 px-4 sm:px-0'>
                <div className=' pt-5 '>
                    <h2>UserName</h2>
                    <input type="email" placeholder='Type your username' required className=' border-b w-72 bg-transparent text-neutral-400 py-2 text-[15px] ' />
                </div>
                <div className=' pt-5 '>
                    <h2>Password</h2>
                    <input type="password" placeholder='Type your password' required className='w-72 border-b-2 text-neutral-400 py-2  bg-transparent text-[15px]' />
                    <p className='font-thin text-neutral-400 pl-32  pt-1 text-[14px]  '>Forget your passsword?</p>
                </div>
               
                <div className='flex justify-center items-center pt-8'>
                    <button className='text-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-24 hover:scale-105
                    mt-4 '>Sign In</button>
                </div>
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <p className='text-[16px]'>Or Sign Up with ?</p>
                    
                </div>
                <div className='flex flex-row space-x-4 text-3xl items-center justify-center mt-4 mb-4'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaGoogle />
                    </div>
            </div>
        </div>
    )
}

export default SignIn