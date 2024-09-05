import React from 'react'
import addToCart from '../assets/AddtoCart.png'
import chat from '../assets/chatApp1.png'
import weather from '../assets/weatherapp.png'
import sundownstudio from '../assets/sundownstudio.png'
import expense from '../assets/expensetracker.png'
import todo from '../assets/todoApp.png'


const Porfolio = () => {
  const projects =[
    {
      id:1,
      name:"chat",
      img:chat,
      link:"https://chattingapp-abhay6397s-projects.vercel.app/",
      code:"https://github.com/abhay6397/chatapp.git"

    },
    {
      id:2,
      name:"weather",
      img:weather,
      link:"https://real-time-weather-1.netlify.app/",
      code:"https://github.com/abhay6397/weather-app.git"

    },
    {
      id:3,
      name:"sundown",
      img:sundownstudio,
      link:"https://abhay6397.github.io/sundown-studio/",
      code:"https://github.com/abhay6397/sundown-studio.git"

    },
    {
      id:4,
      name:"expense",
      img:expense,
      link:"https://abhay6397.github.io/Expense-tracker/",
      code:"https://github.com/abhay6397/Expense-tracker.git"

    },
    {
      id:5,
      name:"addtocart",
      img:addToCart,
      link:"https://abhay6397.github.io/Add-to-cart/",
      code:"https://github.com/abhay6397/Add-to-cart.git"

    },
    {
      id:6,
      name:"todoapp",
      img:todo,
      link:"https://abhay6397.github.io/Todo-app/",
      code:"https://github.com/abhay6397/Todo-app.git"

    },
  ]
  return (
    <div
    name='portfolio'
    className='bg-gradient-to-b from-black to-gray-800 h-screen max-h-mx mx-w-[100vh] pt-28 text-white  mb-[150vh]
    md:mb-0 '
   
    >
      <div className='max-w-screen-lg  mx-auto h-full p-4'>
        <div className='pb-8'>
        <p className='text-4xl border-b-4 border-gray-400 inline font-bold'>Portfolio</p>
        <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='md:grid md:grid-cols-3  gap-8 w-full flex flex-col justify-center items-center'>

          
        {projects.map(({id,img,link,code})=>(

          <div key={id} className='h-52 w-80 shadow-gray-500 shadow-md bg-gray-800 rounded-lg'>
          <img className='rounded-lg h-40  w-full hover:scale-105 duration-200' src={img} alt="project-img" />
          <div className='flex items-center justify-between px-5 py-4'>
           <a href={link} target="_blank">Demo</a>
           <a href={code} target="_blank">code</a>
      
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Porfolio
