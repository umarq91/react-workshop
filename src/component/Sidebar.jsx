import React from 'react'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
  return (
    <div className='bg-gray-600 w-24 flex flex-col h-screen'>

      <SidebarOptions  title="React" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
      <SidebarOptions  title="Green" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYUcxx0_CMosP4bSqlsIvygRTZM5wP6NqgWynmOZC-DzrOiEgvdn1bFr8gjmAGQRjTLQ&usqp=CAU "/>
      
        </div>
  )
}

export default Sidebar