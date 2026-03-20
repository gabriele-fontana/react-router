
import { BrowserRouter } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>  
  )







}

export default App
