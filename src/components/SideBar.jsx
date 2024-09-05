import React from 'react'
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs"
import { CgMail } from "react-icons/cg";


const SideBar = () => {
    const links = [
        {
            id:1,
            link:'https://www.linkedin.com/in/abhay-choudhary-9651aa311/',
            name: 'LinkedIn',
            icon:<FaLinkedin size={30}/>,
            style:'rounded-tr-md'
        },
        {
            id:2,
            link:'https://github.com/abhay6397',
            name: 'GitHub',
            icon:<FaGithub size={30}/>
        },
        {
            id:3,
            link:'mailto:abhay.fwd@gmail.com',
            name: 'Mail',
            icon:<CgMail size={30}/>
        },
        {
            id:4,
            link:'/AbhayChoudharyResume.pdf',
            name: 'Resume',
            download: true,
            icon:<BsFillPersonLinesFill size={30}/>,
            style:'rounded-br-md'
        }
    ]
  return (
    <div className='hidden lg:flex flex-col fixed top-[35%]  left-[0%]'>
      <ul>
        {links.map(({id,link,name,icon,download,style})=>(
            <li key={id}
             className={`flex items-center justify-between bg-gray-500  text-white
             w-40 h-14 ml-[-100px] hover:ml-[-10px] px-4 hover:rounded-md duration-300 ${style}`}
            >
             <a
             href={link}
             target='_blank' 
             download={download?'download':''}
             rel="noreferrer"
            className='flex items-center justify-between w-full'>
                {name}
                <span className=''>{icon}</span> 
            </a>
       {/* { console.log(link)} */}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
