import React from 'react'
import profile from '../assets/profile.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'; 

const Home = () => {
    return (
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black
        via-black to-gray-800 '
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-start
            justify-center h-full md:flex-row px-4'
            >
                <div
                    className='flex  flex-col justify-center h-full md:w-2/3 sm:40vh'>
                    <h2 className='text-white text-4xl sm:text-7xl font-bold '
                    >I'm a Front End Developer</h2>
                    <p
                        className='text-gray-500 max-w-md py-4'
                    >Proficient frontend developer skilled in HTML, CSS, JavaScript,
                     jQuery, Bootstrap, Tailwind CSS, and React.js. Experienced 
                     in building responsive and dynamic user interfaces with a
                     focus on performance.</p>

                    <div>
                    <Link className='group text-white w-fit px-6 py-3 my-2
                        bg-gradient-to-r from-cyan-500 to to-blue-500 rounded-md flex items-center cursor-pointer'
                             
                             to={'portfolio'}
                             duration={500}
                             smooth={true}
                             > Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                            </Link>
                    </div>
                </div>
                <div className='md:h-full flex justify-center items-center md:w-1/3 sm:h-[50vh] pb-4'>
                    <img src={profile} alt="my profile"
                        className='rounded-2xl  w-[45%] md:w-full '  />
                </div>
            </div>
        </div>
    )
}

export default Home
