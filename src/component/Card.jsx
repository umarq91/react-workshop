import React from 'react'
import Button from './Button'

const Card = (props) => {
    const {img,profile,title="Your title",channel,views,time,verified} = props


    function handleSubscribe(){
      console.log( "Subscribed")
  }

  function handleLike(){
    console.log( "Liked")
}

  return (
    <div className="w-[85%] max-w-sm rounded-2xl  overflow-hidden shadow-lg h-[400px]">
    <a className="aspect-video overflow-hidden rounded-t-2xl group relative" href="#">
      <img
        alt="Thumbnail"
        className="object-cover w-full transition-transform scale-105 group-hover:scale-100 pointer-events-none"
        height={225}
        src={img}
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="w-10 h-10 absolute inset-0 m-auto translate-x-2/4 text-gray-900 group-hover:text-gray-100" />
    </a>
    <div className="p-4">
      <a className="text-base font-semibold line-clamp-2 hover:underline" href="#">
        {title}
      </a>
      <div className="flex gap-2 items-center text-sm">
        <a className="font-medium hover:underline" href="#">
          Vercel
        </a>
        <time>• {time}</time>
        <span className="text-gray-500">• {views} views</span>
      </div>
    </div>
    {/* <button onClick={()=>console.log("Subscribed")} className='ml-4 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-400'> Subscribe </button>
    <button onClick={()=>console.log("Liked")} className='ml-4 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-400'> Like </button> */}
  <Button onClick={handleSubscribe}  color="red"> Subscribe </Button>
  <Button  onClick={handleLike} color="blue"> Like </Button>

  </div>
  )
}

export default Card