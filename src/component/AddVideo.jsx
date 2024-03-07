import React, { useState } from 'react'

const AddVideo = ({addVideo}) => {

const [video,setVideo] = useState({
    id:Math.floor(Math.random()*200),
    img:"",
    title:"My Title",
    views:"200",
    channel:"Carry",
    verified:true,time:"43993"
})



    function handleAddVideo(){
        addVideo(video)
    }

  return (
    <div>
       <button onClick={handleAddVideo}>Add Video</button>
    </div>
  )
}

export default AddVideo