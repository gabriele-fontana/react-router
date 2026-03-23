
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import PoductPage from "./pages/ProductPage"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from "./components/Layout";

function App() {

  return (
  <BrowserRouter>     
    
    <Routes>
      <Route element={<Layout></Layout>}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/ProductPage/:id" element={<PoductPage></PoductPage>}></Route>
      </Route>
      
    </Routes>
    
  </BrowserRouter>

  )







}

export default App
