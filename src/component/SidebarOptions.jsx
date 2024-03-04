import React from 'react'

const SidebarOptions = ({icon,title}) => {
  return (
    <div className='w-[90%] my-2  py-2 hover:bg-gray-400 transition rounded-md'>
       
       <img src={icon}/>
       <h2 className='text-center text-white'> {title} </h2>
    </div>
  )
}

export default SidebarOptions