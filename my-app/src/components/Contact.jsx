import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f9f9f9] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/0090e051-4819-424e-b7ca-e456ff5b9538" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1e1e1e] text-[#1e1e1e]'>Contact</p>
                <p className='text-[#1e1e1e] p-4'>Submit the form below or send me an email at joyceyu96@gmail.com</p>
            </div>
            <input className='bg-[#e0e0e1] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#e0e0e1]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#e0e0e1] p-2' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-[#1e1e1e] border-2 hover:bg-[#e0e0e1] hover:border-[#e0e0e1] px-3 py-4 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact
