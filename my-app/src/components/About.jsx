import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi! I'm Joyce, please take a look around.</p> 
                </div>
                <div>
                    <p> I have always been driven by a desire to help people and make a positive impact in the world. This motivation led me to a career in sales, where I honed my skills in communication and problem-solving while consistently meeting and exceeding sales targets. However, as I progressed in my career, I realized that my true passion lies in the world of technology and software development.

                    I made the decision to pursue a new path and enrolled in a software engineering bootcamp, where I gained a strong foundation in the fundamentals of JavaScript and Python. From there, I began working on a variety of software development projects, including building full stack web applications for music lovers and automotive dealerships, and converting a monolithic application into microservices.
                    
                    I am excited to bring my sales experience and technical skills to a career in software engineering, where I can continue to help people and make a positive impact through the innovative solutions I build.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
