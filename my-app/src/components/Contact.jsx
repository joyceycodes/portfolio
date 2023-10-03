import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full py-24 bg-[#b8c1ec] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/0090e051-4819-424e-b7ca-e456ff5b9538" className='text-[#232946] flex flex-col max-w-[600px] w-full'>
            <div className='pb-4 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#232946]'>Contact</p>
                <p className='py-4'>Submit the form below or send me an email at joyceyu96@gmail.com</p>
            </div>
            <input className='bg-[#fffffe] p-2 placeholder-[#232946] text-[#232946]' aria-label='name' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#fffffe] placeholder-[#232946] text-[#232946]' aria-label='email' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#fffffe] p-2 placeholder-[#232946] text-[#232946]' aria-label='message' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='bg-[#232946] text-[#fffffe] px-3 py-4 my-8 mx-auto flex items-center'>Let's collaborate ◡̈ </button>
        </form>
    </div>
  )
}

export default Contact
