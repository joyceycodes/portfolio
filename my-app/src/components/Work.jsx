import React from 'react'
import JamPackd from '../assets/JamPackd.png'
import car from '../assets/car.jpg'
import crowns from '../assets/crowns.png'
import conference from '../assets/conference.jpg'
import todo from '../assets/todo.jpg'
import recipe from '../assets/recipe.jpg'
import { FaGithub } from 'react-icons/fa'

const Work = () => {
  return (
    <div name='work' className='gradient4 w-full md:h-screen text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-white border-white'>Work</p>
            <p className='py-6'>Here are some of my recent projects!</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {/* card item */}
            <div style={{backgroundImage: `url(${JamPackd})`}} className='shadow-lg shadow-[#686d747c] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                        Jam Pack'd
                    </span>
                    <span className='text-m font-bold text-white tracking-wider flex justify-center'>
                        FastAPI, React, MongoDB, Render
                    </span>
                    <p className='px-4 text-center'>Full stack web application for music lovers to discover new tunes, Tinder-style, and create playlists</p>
                    <div className='flex justify-center'>
                        <a href="https://joyceyu96.gitlab.io/jam-packd/" target="_blank" rel="noreferrer">
                        <button className='align-middle rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-500 font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'>Live</button>
                        </a>
                        <a href="https://github.com/joyceycodes/JamPackd" target="_blank" rel="noreferrer">
                        <button className='align-middle rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-500 font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'><FaGithub size={25}/></button>
                        </a>
                    </div>
                </div>
            </div>
        
       
            {/* card item */}
            <div style={{backgroundImage: `url(${car})`}} className='shadow-lg shadow-[#686d747c] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                        Dealer Desk
                    </span>
                    <span className='text-m font-bold text-white tracking-wider flex justify-center'>
                    Django, React, Postgres
                    </span>
                    <p className='text-center px-4'>Full stack web application for an automotive dealership management of inventory, sales, and service records</p>
                    <div className='text-center'>

                        <a href="https://github.com/joyceycodes/DealerDesk" target="_blank" rel="noreferrer">
                        <button className='rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-500 font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'><FaGithub size={25}/></button>
                        </a>
                    </div>
                </div>
            </div>

            {/* card item */}
            <div style={{backgroundImage: `url(${conference})`}} className='shadow-lg shadow-[#686d747c] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-center text-2xl font-bold text-white tracking-wider flex justify-center'>Attend It
                    </span>
                    <span className='text-m font-bold text-white tracking-wider flex justify-center'>
                    Django, React, Postgres, RabbitMQ
                    </span>
                    <p className='text-center px-4'>Full stack web application for managing conference logistics, including attendees and locations</p>
                    <div className='text-center'>

                        <a href="https://github.com/joyceycodes/attendit" target="_blank" rel="noreferrer">
                        <button className='text-center px-4 py-3 m-2 bg-white text-gray-500 rounded-lg font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'><FaGithub size={25}/></button>
                        </a>
                    </div>
                </div>
            </div>

            {/* card item */}
            <div style={{backgroundImage: `url(${crowns})`}} className='shadow-lg shadow-[#686d747c] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider flex justify-center'>
                        CROWNS
                    </span>
                    <span className='text-m font-bold text-white tracking-wider flex justify-center'>
                    HTML, CSS, WordPress
                    </span>
                    <p className='text-center px-4'>A multi page static website for a non-profit that supports continued development of families impacted by incarceration </p>
                    <div className='text-center'>
                    <div className='flex justify-center'>
                        <a href="https://crownshtx.org/" target="_blank" rel="noreferrer">
                        <button className='align-middle rounded-lg text-center px-4 py-3 m-2 bg-white text-gray-500 font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'>Live</button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>

            {/* card item */}
            <div style={{backgroundImage: `url(${recipe})`}} className='shadow-lg shadow-[#686d747c] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-center text-2xl font-bold text-white tracking-wider flex justify-center'>Scrumptious Recipes
                    </span>
                    <span className='text-m font-bold text-white tracking-wider flex justify-center'>
                    Django, React, MySQL
                    </span>
                    <p className='text-center px-4'>Full stack web application to keep track of all your favorite recipes</p>
                    <div className='text-center'>

                        <a href="https://gitlab.com/joyceyu96/scrumptious-recipes-hardening" target="_blank" rel="noreferrer">
                        <button className='text-center px-4 py-3 m-2 bg-white text-gray-500 rounded-lg font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'><FaGithub size={25}/></button>
                        </a>
                    </div>
                </div>
            </div>

            {/* card item */}
            <div style={{backgroundImage: `url(${todo})`}} className='shadow-lg shadow-[#686d747c] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-center text-2xl font-bold text-white tracking-wider flex justify-center'>Project Tracker
                    </span>
                    <span className='text-m font-bold text-white tracking-wider flex justify-center'>
                    Django, React, SQLite
                    </span>
                    <p className='text-center px-4'>Full stack web application that allows users to keep track of current projects and tasks</p>
                    <div className='text-center'>

                        <a href="https://gitlab.com/joyceyu96/project-tracker" target="_blank" rel="noreferrer">
                        <button className='text-center px-4 py-3 m-2 bg-white text-gray-500 rounded-lg font-bold- text-lg bg-opacity-50 hover:bg-opacity-100'><FaGithub size={25}/></button>
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
