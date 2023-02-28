import React from 'react'
import {SiDjango, SiJavascript, SiHtml5, SiCss3, SiPython, SiReact} from 'react-icons/si'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#f9f9f9] text-[#1e1e1e] w-full h-80%'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#1e1e1e]'>Skills</p>
            <p className='py-4'> These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='hover:scale-110 duration-500'>
                <SiHtml5 className='mx-auto w-20' size={70}/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='hover:scale-110 duration-500'>
              <SiCss3 className='mx-auto w-20' size={70}/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='hover:scale-110 duration-500'>
                <SiJavascript className='mx-auto w-20' size={70}/>
                <p className='my-4'>Javascript</p>
            </div>
            <div className='hover:scale-110 duration-500'>
                <SiPython className='mx-auto w-20' size={70}/>
                <p className='my-4'>Python</p>
            </div>
            <div className='hover:scale-110 duration-500'>
                <SiReact className='mx-auto w-20' size={70}/>
                <p className='my-4'>React</p>
            </div>
            <div className='hover:scale-110 duration-500'>
                <SiDjango className='mx-auto w-20' size={70}/>
                <p className='my-4'>Django</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
