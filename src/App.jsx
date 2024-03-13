
import { useState } from "react"
import Main from "./component/Main"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import TodoListMain from "./TodoList/TodoListMain"
import TypingMain from "./typing-test/Typing-Main"

const App=()=>{
    const [count,setCount] = useState(0)
const myObj = {
    name:"umer",
    rollNo:34,
    link:"https://google.com"
}


return(
    <>
  {  // <div className=" h-[100%]">

    //     <Navbar/>
    //     <div className="flex">

    //     <Sidebar/>
    //     <Main/>


    //     </div>

    // </div>
}
    {/* <TodoListMain/> */}
<div className="bg-gray-700 h-screen flex justify-center items-center flex-col">
<h1 className="text-white text-3xl">Typing Game</h1>
<TypingMain/>
</div>


    </>
)
}

export default App


