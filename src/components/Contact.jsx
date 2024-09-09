import React from 'react'

const Contact = () => {
  return (
    <div
    name='contact'
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className=' max-w-screen-lg  h-full mx-auto flex flex-col justify-center p-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
        

        <form action="https://getform.io/f/byvpdvea" method='POST' className='flex flex-col w-full items-center'>
            <input
             required
             className='bg-gray-800 text-white
             border-white border-2 rounded md:w-1/2 w-[75%] py-1 px-2 outline-none mb-4' 
             type="text" placeholder='Enter your name'
             name='name'/>

            <input
            required
            className='bg-gray-800 text-white 
             border-white border-2 rounded  md:w-1/2 w-[75%] py-1 px-2 outline-none mb-4' 
             type="text" placeholder='Enter your email address'
             name='email'/>

            <input className='bg-gray-800 text-white 
             border-white border-2 rounded md:w-1/2 w-[75%] py-1 px-2 pb-44 outline-none mb-4' 
              type="text" placeholder='Enter your message' 
              name='message'/>

            <button
             className=' bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer
              font-semibold py-2 px-3 rounded-md'
             >Let's talk</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
