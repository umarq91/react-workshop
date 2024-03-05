import React from 'react'
import Card from './Card'
import { cardsData } from './data'

const Main = () => {


  return (
    <div className='bg-gray-200 flex-1 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
  
  {
    cardsData.map((card)=>(
<Card key={card.id}  img={card.img} profile={card.profile} channel={card.channel} views={card.views} time={card.time} verified={card.verified}/>
    ))
  }


    
        </div>
  )
}

export default Main