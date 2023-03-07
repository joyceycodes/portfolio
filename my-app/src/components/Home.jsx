import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import me from'../assets/me.jpg'
const Home = () => {
  return (
    <div name='home' className='gradient1 w-full h-screen'>
      {/* container */}
      <div className='max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-4'>
      <div>
        <p className='text-white font-bold'>Hi, my name is</p>

        <div className='content mb-12'>
          <h1 className='text-4xl md:text-7xl'>Joyce Yu</h1>
          <h1 className='text-4xl md:text-7xl'>Joyce Yu</h1>
        </div>
        <br></br>
        <h2 className='text-4xl md:text-7xl text-white'>I'm a</h2>
        <h2 className='text-4xl md:text-7xl text-white'>Full Stack Software Engineer.</h2>
        <p className='text-white py-4 max-w-700px font-bold'>San Francisco, CA</p>
          <div>
          <Link to="work" smooth={true} duration={500}> 
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-gray-500 hover:border-gray-500'>
                  View Work
                  <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
              </button>
          </Link>
        </div>
        </div>
        <div className='rounded-full' style={{backgroundImage: `url(${me})`,backgroundPosition:'0px 510px', backgroundSize:'560px 725px'}}>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home
// <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a</h2>
// <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full Stack Software Engineer.</h2>