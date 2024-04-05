import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import user4 from '../images/user4.jpg'
import user5 from '../images/user5.jpg'
import user6 from '../images/user6.jpg'
import Image from 'next/image'
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

const Testimonial = () => {
  return (
    <div data-aos="fade-up" className='mt-20 tracking-wide'>
      <h2 data-aos="fade-out" className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 '>What people are saying</h2>
      <div data-aos="fade-up" className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
              <p className=''>{testimonial.text}</p>
              <div className='flex mt-8 items-start'>
                <Image className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={testimonial.image} alt={testimonial.user} />
                <div>
                <h6>{testimonial.user}</h6>
              <span className='text-sm font-normal italic text-neutral-600'>{testimonial.company}</span></div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial