import video from 'next-video'
import Video1 from './video1.mp4'
import Video2 from './video2.mp4'




const Hero = () => {
  return (
   <div data-aos="fade-up" className='flex flex-col items-center mt-6 lg:mt-20 px-8'>
    <h1 className='text-4xl sm:text-6xl  lg:text-7xl text-center tracking-wide'>
        VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 
        text-transparent bg-clip-text'> for developers</span>
    </h1>
    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Empower your craetivity and bring your VR app ideas to life with our
    initiative development tools.Get started today and turn your imagination
    into impressive reality</p>
    <div  className='flex justify-center my-10'>
   
        <button className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-4 mx-3 cursor-pointer rounded-md
       hover:scale-105 ">
            Start for free
        </button>
        <button className=" py-3 px-4 mx-3 border cursor-pointer rounded-md
       hover:scale-105 ">
            Documentation
        </button>
        
    </div>
    <div data-aos="fade-up-right"  className="flex mt-10 justify-center ">
            <video autoPlay loop muted  className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 
            mx-2 my-4"> 
              <source src='/video1.mp4' type="video/mp4" />
               Your browser does not support this video
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 
            mx-2 my-4"> 
               <source src='/video2.mp4' type="video/mp4" /> 
               Your browser does not support this video
            </video>
        </div>
   </div>

  )
}

export default Hero