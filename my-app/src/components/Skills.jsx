import React from 'react'
import CSS from "../assets/CSS.png"

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
    {/* container */}
      <div>
        <div>
            <p>Experience</p>
        </div>
        <div>
            <div>
                <img className='mx-auto w-20' src={CSS} alt='CSS'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
