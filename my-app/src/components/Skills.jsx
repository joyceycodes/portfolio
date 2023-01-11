import React from 'react'
import CSS from "../assets/CSS.png"
import HTML from "../assets/HTML.png"
import Javascript from "../assets/Javascript.png"
import ReactIcon from "../assets/ReactIcon.png"
import Python from "../assets/Python.png"
import Django from "../assets/Django.png"

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'> These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='mx-auto w-20' src={HTML} alt='HTML icon'/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='mx-auto w-20' src={CSS} alt='CSS icon'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='mx-auto w-20' src={Javascript} alt='Javascript icon'/>
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='mx-auto w-20' src={Python} alt='Python icon'/>
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='mx-auto w-20' src={ReactIcon} alt='React icon'/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='mx-auto w-20' src={Django} alt='Django icon'/>
                <p className='my-4'>Django</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
