import React from 'react'
import JamPackd from '../assets/JamPackd.png'
import car from '../assets/car.jpg'
import conference from '../assets/conference.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#1e1e1e] bg-[#f9f9f9]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#1e1e1e] border-[#1e1e1e]'>Work</p>
            <p className='py-6'>Here are some of my recent projects</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* card item */}
            <div style={{backgroundImage: `url(${JamPackd})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                        Jam Pack'd
                    </span>
                    <p className='px-4 text-center'>Music discovery application for music lovers, think 'Tinder' but for finding the perfect tune</p>
                    <div className='text-center'>
                        <a href="https://joyceyu96.gitlab.io/jam-packd/">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg '>Demo</button>
                        </a>
                        <a href="https://github.com/joyceycodes/JamPackd">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        
       
            {/* card item */}
            <div style={{backgroundImage: `url(${car})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                        Dealer Desk
                    </span>
                    <p className='text-center px-4'>Application for automotive dealerships to track sales, inventory, and service appointments</p>
                    <div className='text-center'>

                        <a href="https://github.com/joyceycodes/DealerDesk">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold- text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* card item */}
            <div style={{backgroundImage: `url(${conference})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-center text-2xl font-bold text-white tracking-wider flex justify-center'>Attend It
                    </span>
                    <p className='text-center px-4'>Create a conference and keep track of all the attendees</p>
                    <div className='text-center'>

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
