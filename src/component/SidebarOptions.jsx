import React from 'react'

const SidebarOptions = ({Icon,title}) => {
  return (
    <div className='w-[90%] my-2 flex justify-around items-center overflow-hidden h-12 py-2 hover:bg-gray-400 transition rounded-md'>
       
       
    <Icon className="h-10 w-10 text-white"/>
       <h2 className='text-center text-white'> {title} </h2>
    </div>
  )
}

export default SidebarOptions