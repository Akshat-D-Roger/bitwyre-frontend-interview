import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import { useRecoilValue } from "recoil"
import darkModeAtom from "./store/atoms/darkMode.ts"
import useInitialise from "./store/hooks/useInitialise"
import Product from "./pages/Product"

const App = () => {
  useInitialise();
  const darkMode = useRecoilValue(darkModeAtom);
  
  return (
    <div className={`h-full w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col ${darkMode && 'bg-black'}`}>
      <Navbar/>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collections" element={<Collection/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App