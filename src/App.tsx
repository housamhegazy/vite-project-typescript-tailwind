import Navbar from "@/scenes/navbar"
import { useState } from "react"
function App() {
  const [selectedPage,setselectedPage] = useState("home")
  return (
    <div className="app b-gray-20">
      <Navbar selectedPage={selectedPage}
        setselectedPage={setselectedPage} />
    </div>
  )
}

export default App
