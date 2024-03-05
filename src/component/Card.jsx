import React from 'react'

const Card = (props) => {
    const {img,profile,title="Your title",channel,views,time,verified} = props



  return (
    <div className='bg-white shadow-2xl rounded-lg cursor-pointer hover:scale-105 translate-x-2 transition-all my-10 w-full md:w-[320px] h-[320px]'>
        
        <img src={img}  className='object-cover w-full h-[60%]'/>

    <div className="flex">
                <div className="left">
                    <img  className='h-14 mt-2 w-14 object-fit rounded-full' src={profile}/>
                </div>
                <div className="right">

                   <h1 className='text-xl p-2 font-bold'> {title} {verified && <> ✅</>}                   
                    
                    
                    </h1>
                <h3> {channel} </h3>
                <span className='mr-4'> {views} </span> <span> {time} </span>
                </div>
    </div>

    </div>
  )
}

export default Card