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
        <p className='text-xl mt-7'>Frontend developer with expertise in HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, and React.js, dedicated to building interactive and responsive web interfaces. I thrive on creating seamless user experiences. </p>

        <br />
   
        <p className='text-xl mt-7'>In addition to my frontend expertise, I have foundational knowledge of backend technologies, including Node.js, Express.js, MongoDB, and GitHub. This allows me to contribute effectively to full stack development and collaborate across various stages of the project lifecycle.</p>
      </div>
    </div>
  )
}

export default About
