import React from 'react'
import Image from 'next/image'
import Code from '../images/code.jpg'
import { BiCheck } from 'react-icons/bi';
export const checklistItems = [
    {
      title: "Code merge made easy",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Review code without worry",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "AI Assistance to reduce time",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Share work in minutes",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
  ];

const Workflow = () => {
  return (
    <div data-aos="fade-up" className='mt-20 px-12'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center
        mt-6 tracking-wide'>Accelerate Your <span className='bg-gradient-to-r from-orange-500 to-orange-800
        text-transparent bg-clip-text '>{''}Coding flow</span></h2>
        {/* picture */}
        <div data-aos="zoom-in-up" className='flex flex-wrap justify-center'>
            <div className='p-2 w-full lg:w-1/2'>
                <Image src={Code} alt='code' />
            </div>
            <div  className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item,index)=>(
                    <div key={index}  className='flex mb-12'>
                        <div className='text-green-400 mx-6 bg-neutral-900 border border-green-400 h-10 w-10
                        p-2 justify-center items-center rounded-full text-2xl '>
                            <BiCheck /> 
                        </div>
                        {/* text */}
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>
                              {item.title}
                            </h5>
                            <p  className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow