import Button from "./Button"
import {Body} from "./component/Body"
import Footer from "./component/Footer"
import Header from "./component/Header"

const App=()=>{


return(
<> 
<div className="ml-10 bg-red-700 h-screen flex text-white flex-col items-center justify-between">
<Header/>

<Body/>


<Footer/>
</div>
</>
)
}

export default App


