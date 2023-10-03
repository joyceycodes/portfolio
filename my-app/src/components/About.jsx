import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-[#232946] pb-24 text-white h-fit'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full sm:grid-cols-2 gap-16 p-4'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
                <p className=" text-[#b8c1ec] text-lg py-4">
                  Hello, I'm Joyce, a passionate Full Stack Developer on a journey to craft exceptional digital experiences. With a blend of creativity and technical expertise, I thrive in translating innovative ideas into functional and user-friendly applications. My experience encompasses front-end and back-end development, along with a knack for problem-solving that allows me to tackle complex challenges head-on.
                  <br></br>
                  <br></br>
                  I come from a diverse background and have held positions in sales and customer experience, where I honed my interpersonal skills, empathy, and ability to understand and exceed customer expectations. This experience has proven invaluable in my transition to full-stack development. I understand that behind every line of code is a potential user, and I'm dedicated to crafting intuitive and engaging applications that resonate with people. I'm excited to explore opportunities where I can merge my technical expertise with my sales and customer experience background to deliver meaningful results for both users and businesses.
                </p>
              </div>
          </div>
        </div>

  )
}

export default About
