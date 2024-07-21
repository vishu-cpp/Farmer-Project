import Marketplace from "./components/Marketplace"
import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Market from "./market/Market"
import Signup from "./components/Signup"
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <>    
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Market />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>

      </Routes>
      </div>
      
    </>
    
  )
}

export default App