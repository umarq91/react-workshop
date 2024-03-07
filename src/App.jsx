
import { useState } from "react"
import Main from "./component/Main"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import TodoListMain from "./TodoList/TodoListMain"

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
    <TodoListMain/>



    </>
)
}

export default App


