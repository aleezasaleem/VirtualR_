import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdFingerPrint } from "react-icons/io";
import { FaShieldHalved } from "react-icons/fa6";
import { CiBatteryCharging } from "react-icons/ci";
import { LuPlugZap } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa";
export const features = [
    {
      icon: <MdOutlineMessage />,
      text: "Drag-and-Drop Interface",
      description:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon: <IoMdFingerPrint />,
      text: "Multi-Platform Compatibility",
      description:
        "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      icon: <FaShieldHalved />,
      text: "Built-in Templates",
      description:
        "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      icon: <CiBatteryCharging />,
      text: "Real-Time Preview",
      description:
        "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      icon: <LuPlugZap />,
      text: "Collaboration Tools",
      description:
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
      icon: <FaGlobe />,
      text: "Analytics Dashboard",
      description:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];
  

const Features = () => {
  return (
    <div data-aos="fade-up" className='relative mt-24 border-b border-neutral-800 min-h-[800px] px-12'>
        <div className='text-center '>
            <span className='bg-neutral-800 text-orange-500 rounded-full h-6
            text-sm font-medium px-2 py-1 uppercase'>Features</span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>Easily build 
            <span className='bg-gradient-to-r from-orange-500 to-orange-800
            text-transparent bg-clip-text'> {''}your code</span></h2>
        </div>
        {/* cards */}
        <div  className='flex flex-wrap mt-10 lg:mt-20'>
            {features.map((features,index)=>(
                <div key={index} data-aos="zoom-in-up" className='w-full sm:w-1/2 lg:w-1/3'>
                    <div className='flex'>
                        <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-950
                        text-orange-700 justify-center items-center rounded-full '>
                            {features.icon}
                        </div>
                        <div>
                            <h5 className='mt-1 mb-6 text-xl'>{features.text}</h5>
                            <p className='text-md p-2 mb-20 text-neutral-500'>{features.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features