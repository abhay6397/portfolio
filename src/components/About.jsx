import React from 'react'

const About = () => {
  return (
    <div
    name='about'
     className=' h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white '
     >
      <div 
      className='max-w-screen-lg mx-auto flex p-4 justify-center flex-col h-full '
      >
        <div
        className='pb8'
        >
        <p className=' text-4xl font-bold border-b-4 border-gray-500 inline '
        >About</p>
      </div>
        <p className='text-xl mt-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, reiciendis optio molestias architecto voluptate impedit corrupti autem ab molestiae nisi a aliquam, doloremque consequuntur nulla provident mollitia ipsa quas? </p>

        <br />
   
        <p className='text-xl mt-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, reiciendis optio molestias architecto voluptate impedit corrupti autem ab molestiae nisi a aliquam, doloremque consequuntur nulla provident mollitia ipsa quas?</p>
      </div>
    </div>
  )
}

export default About
