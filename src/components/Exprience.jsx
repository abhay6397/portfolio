import React from 'react'

const Exprience = () => {
  const exp = [
    {
      id:1,
      name:"html",
      shadow:"shadow-orange-600",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5yY3rFsrImrYCaCb55pbBnW8T94S8XjqkTGn5Mm5zP9cal0AFVyBVPtu1ZIyMwt8R7k&usqp=CAU"
    },
    {
      id:2,
      name:"css",
      shadow:"shadow-blue-600",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfXdKH7SrCVpLx-h0j9VSLf7LQxwWgptJNw&s"
    },
    {
      id:3,
      name:"bootstarp",
      shadow:"shadow-purple-600",
      img:"https://miro.medium.com/v2/resize:fit:500/1*wXhdUKkpJUQZ-kqtBWCwWA.png"
    },
    {
      id:4,
      name:"javascript",
      shadow:"shadow-yellow-600",
      img:"https://instructobit.com/static/img/post_defaults/javascript.jpg"
    },
    {
      id:5,
      name:"jQuery",
      shadow:"shadow-gray-600",
      img:"https://logowik.com/content/uploads/images/311_jquery_logo.jpg"
    },
    {
      id:6,
      name:"reactjs",
      shadow:"shadow-cyan-600",
      img:"https://as1.ftcdn.net/v2/jpg/03/04/97/12/1000_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg"
    },
    {
      id:7,
      name:"nodejs",
      shadow:"shadow-green-600",
      img:"https://miro.medium.com/v2/resize:fit:1400/1*9oOlDJKiLq1KhGoOivv51A.png"
    },
   
    {
      id:9,
      name:"mongodb",
      shadow:"shadow-green-600",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCbY7nOQZ42XVkPPCckVzG-jIdTRfj_5hyQ&s"
    },
    {
      id:10,
      name:"github",
      shadow:"shadow-gray-600",
      img:"https://github.blog/wp-content/uploads/2024/07/github-logo.png"
    },

  ]
 
  return (
    <div
    name='experience'
     className='bg-gradient-to-b from-gray-800 to-black min-h-screen max-h-max w-full text-white pt-28
     '
    >
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center p-4 h-full'>
        <div className='pb-8'>
            <p className='text-4xl border-b-4 border-gray-500 inline font-bold'>Experience</p>
            <p className='pt-6'>These are the technologies I've worked with</p>
        </div>
    <div className='grid md:grid-cols-4 grid-cols-2 mx-auto gap-2 md:gap-6'>
        
        {
          exp.map(({id,shadow,img})=>(
            <div key={id} className={`${shadow} shadow-lg mt-6 hover:scale-105 duration-200 cursor-pointer rounded-lg md:h-64 md:w-56 w-36 h-36`}>
            <img className='rounded-lg  w-full h-full' src={img} alt="img" />
        </div>
          ))
        }
    </div>

      </div>
    </div>
  )
}

export default Exprience
