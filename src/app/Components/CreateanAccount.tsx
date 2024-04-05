import React from 'react'

const CreateanAccount = () => {
  return (
    <div className='mt-7 mb-5 flex justify-center items-center'>
            <div className='border border-orange-900  mx-20 mt-16  sm:w-1/2 md:w-1/2 lg:w-1/3 pt-6  '>
                <h3 className='text-4xl font-bold text-center'>Create Account</h3>
               <div className='flex flex-col justify-center items-center'>
                <div className='  pt-14  '>
                   
                    <input type="text" placeholder='Name' required className=' border h-12 px-4 w-72 bg-transparent text-neutral-400 text-[15px] ' />
                </div>
                <div className=' pt-8 '>
                   
                   <input type="Email" placeholder='Email' required className=' border h-12 px-4 w-72 bg-transparent text-neutral-400 text-[15px] ' />
               </div>
               <div className=' pt-8 '>
                   
                    <input type="password" placeholder='Password' required className=' border h-12 px-4 w-72 bg-transparent text-neutral-400 text-[15px] ' />
                </div>
                </div>
                <div className='px-14 space-x-6 mb-7 flex items-center justify-center '>
                    <button className='text-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-8 hover:scale-105
                    mt-4 '>SignIn</button>
                     <button className='text-center rounded-lg bg-neutral-800 py-2 px-8 hover:scale-105
                    mt-4 '>SignUp</button>
                </div>
               
                
            </div>
        </div>
  )
}

export default CreateanAccount