import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/Types"
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/contactus";


function App() {
  const [selectedPage,setselectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setselectedPage(SelectedPage.Home)
      }
      
    }
    if(window.scrollY !== 0)setIsTopOfPage(false)
    
    window.addEventListener("scroll",handleScroll);
    return window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="app b-gray-20">
      <Navbar 
      isTopOfPage = {isTopOfPage}
      selectedPage={selectedPage}
        setselectedPage={setselectedPage} />
        <Home setselectedPage={setselectedPage}/>
        <Benefits setselectedPage={setselectedPage}/>
        <OurClasses setselectedPage={setselectedPage}/>
        <ContactUs setselectedPage={setselectedPage}/>
    </div>
  )
}

export default App
