import React from 'react'
import SidebarOptions from './SidebarOptions'
import { IoMdHome } from "react-icons/io";
import { MdUnsubscribe } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className='bg-gray-600 w-[20%] flex flex-col h-screen'>

      <SidebarOptions  title="Home" Icon={IoMdHome}/>
      <SidebarOptions  title="Subscribe" Icon={MdUnsubscribe}/>
    
        </div>
  )
}

export default Sidebar