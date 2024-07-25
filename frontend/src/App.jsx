import Marketplace from "./components/Marketplace"
import Home from "./home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Market from "./market/Market"
import Signup from "./components/Signup"
import ContactUs from "./components/ContactUs"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./context/AuthProvider"

function App() {
      const[authUser,setAuthUser]=useAuth();
      console.log(authUser); 
  return (
    <>    
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={authUser?<Market />:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        

      </Routes>
      <Toaster/>
      </div>
      
    </>
    
  )
}

export default App