import React, { useState } from 'react'
import Card from './Card'
import { cardsData } from './data'
import AddVideo from './AddVideo'

const Main = () => {
const [cards,setCards ] = useState(cardsData)

function addVideo(video){
  setCards([...cards,video])
}


  return (
    <>
    <div className='bg-gray-200 flex-1 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      <AddVideo addVideo={addVideo}/>
    
  {
    cards.map((card)=>(
<Card key={card.id}  img={card.img} profile={card.profile} channel={card.channel} views={card.views} time={card.time} verified={card.verified}/>
    ))
  }


    
        </div>
    </>
  )
}

export default Main