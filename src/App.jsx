
import { useEffect, useState } from "react"
import Main from "./component/Main"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import TodoListMain from "./TodoList/TodoListMain"
import TypingMain from "./typing-test/Typing-Main"

const App=()=>{
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)


    


    useEffect(() => {
      const getText = async () => {
        setLoading(true);
        const res = await fetch(
          "https://baconipsum.com/api/?type=all-meat&paras=5&format=json"
        );
        const data = await res.json();
        setLoading(false)
        setData(data);
      };
      getText();
    }, []);


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

{loading && <h1 className="text-white text-3xl">Loading...</h1>}
{data &&  <TypingMain  data={data[0]}/>}

</div>


    </>
)
}

export default App


