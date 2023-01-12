import React from 'react'
import JamPackd from '../assets/JamPackd.png'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 test-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Here are some of my recent projects</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* card item */}
            <div style={{backgroundImage: `url(${JamPackd})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Jam Pack'd Music App
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://semi-serious-solutions.gitlab.io/jam-packd/">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg '>Demo</button>
                        </a>
                        <a href="https://github.com/joyceycodes/JamPackd">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        
       
            {/* card item */}
            <div style={{backgroundImage: `url(${JamPackd})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider text-center'>
                        Dealer Desk
                    </span>
                    <div className='pt-8 text-center'>

                        <a href="https://github.com/joyceycodes/DealerDesk">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* card item */}
            <div style={{backgroundImage: `url(${JamPackd})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Attend It
                    </span>
                    <div className='pt-8 text-center'>

                        <a href="https://github.com/joyceycodes/attendit">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
     </div>
    </div>
   </div>
  )
}

export default Work
