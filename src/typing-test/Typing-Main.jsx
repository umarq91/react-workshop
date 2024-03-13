import React, { useEffect, useRef, useState } from 'react'
import { text } from './text'


const TypingMain = () => {
const [currentActiveIndex,setCurrentActiveIndex] = useState(0)
const [input,setInput] = useState('')
const [correctWordsArray,setCorrectWordsArray] = useState([])
const [timeStarts,setTimeStarts]=  useState(false)
const [timeEnds,setTimeEnds] = useState(false)


const handleInput = (e) => {
    const value = e.target.value;
    if (!timeStarts) {
        setTimeStarts(true);
      }
  
    if (value.endsWith(" ")) {
      const word = value.trim();

      setCurrentActiveIndex((prev) => prev + 1);
      setInput("");
  
      setCorrectWordsArray((prevTypedWords) => {
        const updatedWords= [...prevTypedWords]; // Create a copy of the array
        updatedWords[currentActiveIndex] = word === text[currentActiveIndex]; // Update the value at the current index

        return updatedWords;
      });
    } else {
      setInput(value);
    }

    
  };


const handleTimeUp=()=>{

}

  return (
    <div className='p-10'> 
    <Timer 
    timeEnds={setTimeEnds}
    timeStarts={timeStarts}
    />
    {text.map((word,index)=>{
      return <Word
       word={word}
       key={index}
       active={index===currentActiveIndex}
       correct={correctWordsArray[index]}

       />
    })}
    
    <input
    value={timeEnds ? ' Time Up ' : input}
    onChange={(e)=>handleInput(e)}
    className='px-10 py-2 block mt-4' type="text" name="" id="" />
    </div>
  )
}

export default TypingMain


let Word= ({word,active,correct})=>{



if (active) {
    return <b> {word}   </b>;
  }
// correct 
if(correct==true){
   return <span className='text-green-500'>  {word}  </span>
}

if (correct == false) {
    return <span className='text-red-500'>  {word}  </span>
  }



    return <span>{word} </span>
}

Word = React.memo(Word)


const Timer = ({ timeStarts, timeEnds }) => {
    const [currentTime, setCurrentTime] = useState(5);
    const intervalIdRef = useRef(null); // Use useRef for persistent reference to interval ID
    
    useEffect(() => {

      if(timeStarts){

        if(currentTime>0){
            intervalIdRef.current = setInterval(() => {
                setCurrentTime((prevTime) => prevTime - 1);
              }, 1000);
        }else {
            timeEnds(true)
            
            clearInterval(intervalIdRef.current);
          }

      }
  
      // Cleanup function to clear interval when unmounting or when time is up
      return () => clearInterval(intervalIdRef.current);
    }, [timeStarts, currentTime]); // Run effect when timeStarts or currentTime changes
  
    return (
      <div>
        <p>Time: {currentTime}</p>
        <p>WPM: ....</p>
      </div>
    );
  };
  