'use client'
import { RiMenu3Line, } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image"
import logo from '../images/logo.png'
import Link from "next/link"
import { useRouter } from "next/navigation";


const Navbar = () => {
    const [mobileDrawerOpen,setmobileDrawerOpen]=useState(false)
    const toggleNavbar=()=>{
        setmobileDrawerOpen(!mobileDrawerOpen)
    }
    const route = useRouter()
   
  return (
   <nav className='sticky top-0 z-50  py-3 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container flex justify-between px-4 mx-auto relative text-sm'>
        <div className='flex items-center justify-center'>
            <div className='flex items-center flex-shrink-0 p'></div>
    <Image src={logo} alt="logo" className="h-10 w-10 mr-2" />
    <span className="text-xl tracking-tight">VirtualR</span>
        </div>
        <ul className="hidden lg:flex ml-14 space-x-14 items-center justify-center">
        <Link href='/'> <li>Home</li></Link>
           <Link href='/Features'> <li>Features</li></Link>
           <Link href='/Workflow'> <li>Workflow</li></Link>
           <Link href='/Pricing'> <li>Pricing</li></Link>
           <Link href='/Testimonial'> <li>Testimonial</li></Link>
        </ul>
        <div className="hidden lg:flex justify-center space-x-12 items-center">
        <button onClick={()=>route.push('/SignIn')} className="px-3 py-2 border rounded-md cursor-pointer hover:scale-105">Sign In</button>
        <button onClick={()=>route.push('/CreateanAccount')} className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 cursor-pointer rounded-md
       hover:scale-105 ">
            Create an account
        </button>
        </div>
        <div  className="lg:hidden md:flex flex-col justify-end  text-xl">
            <button onClick={toggleNavbar} className="py-3">{mobileDrawerOpen ? <RxCross2 /> :<RiMenu3Line />}</button>
        </div>
    </div>
    {
        mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-4 flex flex-col justify-center items-center lg:hidden">
                 <ul className=" space-x-1">
                 <Link href='/'> <li>Home</li></Link>
           <Link href='/Features'> <li>Features</li></Link>
           <Link href='/Workflow'> <li>Workflow</li></Link>
           <Link href='/Pricing'> <li>Pricing</li></Link>
           <Link href='/Testimonial'> <li>Testimonial</li></Link>
        </ul>
        <div className="flex flex-col py-3 space-x-6">
        <button onClick={()=>route.push('/SignIn')}   className=" py-3 px-4 mx-3 border cursor-pointer rounded-md
       hover:scale-105 ">
            Sign In
        </button>
        <button onClick={()=>route.push('/CreateanAccount')} className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 mt-4 cursor-pointer rounded-md
       hover:scale-105 ">
            Create an account
        </button>
        </div>
        
            </div>

        )
    }
   </nav>
  )
}

export default Navbar