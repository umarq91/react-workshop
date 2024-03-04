
import Main from "./component/Main"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"

const App=()=>{
const myObj = {
    name:"umer",
    rollNo:34,
    link:"https://google.com"
}

return(
    <div className=" h-[100%]">

        <Navbar/>
        <div className="flex">

        <Sidebar/>
        <Main/>
        </div>

    </div>
)
}

export default App


