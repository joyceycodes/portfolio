import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen gradient1 flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/0090e051-4819-424e-b7ca-e456ff5b9538" className='text-white flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Contact</p>
                <p className='text-white p-4'>Submit the form below or send me an email at joyceyu96@gmail.com</p>
            </div>
            <input className='bg-[#e0e0e1] p-2 placeholder-white text-gray-500' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#e0e0e1] placeholder-white text-gray-500' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#e0e0e1] p-2 placeholder-white text-gray-500' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:text-gray-500 hover:border-gray-400 px-3 py-4 my-8 mx-auto flex items-center'>Let's collaborate ◡̈ </button>
        </form>
    </div>
  )
}

export default Contact
