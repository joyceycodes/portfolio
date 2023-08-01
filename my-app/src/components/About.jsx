import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen gradient2 text-white '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
            </div>
            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Joyce!</p> 
                </div>
                <div className="font-bold">
                    <p> I am a full stack software engineer that is currently working as a Coding Instructor at The Coder School. I have always been driven by a desire to help people and am passionate about using technology to make a positive impact in the world.
                    <br></br>
                    <br></br>
                    I've worked on a variety of software development projects, including building full stack web applications for music lovers and automotive dealerships, and converting a monolithic application into microservices. I am excited to bring my technical and communications skills to a career in software engineering, where I can continue to help people and make a positive impact through the innovative solutions I build.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
