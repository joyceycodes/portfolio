import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='bg-[#f9f9f9] w-full h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#1e1e1e]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#1e1e1e]'>Joyce Yu</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#1e1e1e]'>I'm a Full Stack Software Engineer.</h2>
        <p className='text-[#1e1e1e] py-4 max-w-700px'>San Francisco, CA</p>
        <div>
        <Link to="work" smooth={true} duration={500}> 
            <button className='text-[#1e1e1e] group border-2 px-6 py-3 my-2 flex items-center '>
                View Work
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
            </button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Home
