import React from 'react'
import {SiDjango, SiJavascript, SiHtml5, SiCss3, SiPython, SiReact, SiFastapi,SiDocker, SiMongodb} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {BiLogoPostgresql} from 'react-icons/bi'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <div name='skills' className='bg-[#eebbc3] text-[#232946] w-full py-24'>
    {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#232946]'>Tools & Technologies</p>
        </div>

        <Carousel className='pt-10'
            responsive={responsive} 
            infinite={true} 
            autoPlay={true}
            autoPlaySpeed={2000}>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiJavascript className='mx-auto w-20' size={70}/>
                <p className='my-4 '>JavaScript</p>
            </div>    
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <TbBrandNextjs className='mx-auto w-20' size={70}/>
                <p className='my-4 '>Next.js</p>
            </div>    

            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiPython className='mx-auto w-20' size={70}/>
                <p className='my-4 '>Python</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiReact className='mx-auto w-20' size={70}/>
                <p className='my-4 '>React</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiMongodb className='mx-auto w-20' size={70}/>
                <p className='my-4'>MongoDB</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <BiLogoPostgresql className='mx-auto w-20' size={70}/>
                <p className='my-4'>PostgreSQL</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiDjango className='mx-auto w-20' size={70}/>
                <p className='my-4'>Django</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiFastapi className='mx-auto w-20' size={70}/>
                <p className='my-4'>FastAPI</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiDocker className='mx-auto w-20' size={70}/>
                <p className='my-4'>Docker</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
                <SiHtml5 className='mx-auto w-20' size={70}/>
                <p className='my-4 '>HTML</p>
            </div>
            <div className='hover:scale-110 duration-500 hover:font-bold group'>
              <SiCss3 className='mx-auto w-20' size={70}/>
                <p className='my-4 '>CSS</p>
            </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Skills
