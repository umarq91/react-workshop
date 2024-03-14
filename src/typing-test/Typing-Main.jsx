import React, { useEffect, useState } from 'react'
import Word from './Word'



const TypingMain = ({data}) => {
  const [text,setText] = useState(data.split(" "))
const [input,setInput] = useState('')
const [ currentTextIndex , setCurrentTextIndex] = useState(0)
const [correctWordsArray,setCorrectWords] = useState([])

const handleInput = (e)=>{
const value = e.target.value

if(value.endsWith(" ")){
  const word = value.trim()
// logic

if(input === text[currentTextIndex]){
 // push true 
 setCorrectWords(prev=>[...prev,true])
}else{
  setCorrectWords(prev=>[...prev,false])
}



setCurrentTextIndex(prev=>prev+1)

  setInput("")
}else{
  setInput(value)
}




console.log(data);
}

  return (
    <div className='bg-gray-700 text-white max-w-4xl m-auto'> 
          {
            text.map((word,index)=>{
              return  <Word 
              word={word}
              active={index===currentTextIndex}
              correct={correctWordsArray[index]}
              />
            })
          }



          <input 
          value={input}
          onChange={(e)=>handleInput(e)}
          className='max-w-lg mt-20 px-16 py-4 text-black m-auto block'
          type="text" name="" id="" />
    </div>
  )
}

export default TypingMain

// design and impletement text 
// we tracked the text 
// tracked the current Active word 
// tracked the input and changed the state of current active word 

// [true, false, true , true]
// input current textindex

// index 0 , correctWords[index]