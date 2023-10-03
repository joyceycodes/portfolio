import React from 'react'
import {SiDjango, SiJavascript, SiHtml5, SiCss3, SiPython, SiReact, SiFastapi,SiDocker, SiMongodb} from 'react-icons/si'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#d4d8f0] text-[#232946] w-full py-24'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#232946]'>Skills</p>
            <p className='py-4 font-bold'> These are the technologies I've worked with!</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 '>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiJavascript className='mx-auto w-20' size={70}/>
                <p className='my-4 '>Javascript</p>
            </div>    
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiHtml5 className='mx-auto w-20' size={70}/>
                <p className='my-4 '>HTML</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
              <SiCss3 className='mx-auto w-20' size={70}/>
                <p className='my-4 '>CSS</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiPython className='mx-auto w-20' size={70}/>
                <p className='my-4 '>Python</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiReact className='mx-auto w-20' size={70}/>
                <p className='my-4 '>React</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiDjango className='mx-auto w-20' size={70}/>
                <p className='my-4'>Django</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiFastapi className='mx-auto w-20' size={70}/>
                <p className='my-4'>FastApi</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiMongodb className='mx-auto w-20' size={70}/>
                <p className='my-4'>MongoDb</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group hover:text-[#fffffe]'>
                <SiDocker className='mx-auto w-20' size={70}/>
                <p className='my-4'>Docker</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
