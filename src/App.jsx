import About from "./components/About"
import Contact from "./components/Contact"
import Exprience from "./components/Exprience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Porfolio from "./components/Porfolio"
import SideBar from "./components/SideBar"

function App() {

  return (
    <div className="bg-gray-800">
    <NavBar/>
    <Home/>
    <About/>
    <Porfolio/>
    <Exprience/>
    <Contact/>

    <SideBar/>
    </div>
  )
}

export default App
