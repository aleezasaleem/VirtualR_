'use client'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Page = () => {
  useEffect(()=>{
    AOS.init({
      duration: 800,
          once: false,
    });
    AOS.refresh();
  }, [])
  return (<>
   
    


<Hero />
<Features />
<Workflow />
<Pricing />
<Testimonial />



</>
  )
}

export default Page