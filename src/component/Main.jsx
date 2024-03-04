import React from 'react'
import Card from './Card'
import { cardsData } from './data'

const Main = () => {



  return (
    <div className='bg-gray-200 flex-1 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
  
  {
    cardsData.map((card)=>(
<Card img={card.img} profile={card.profile} title={card.title} channel={card.channel} views={card.views} time={card.time}/>
    ))
  }
    
        </div>
  )
}

export default Main