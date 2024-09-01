/* eslint-disable no-unused-vars */
// App.js
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Singleproduct from "./Singleproduct";
import { CartProvider } from "./Context/Context";  // Import CartProvider
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Login from "./Components/Login";
import Signup from "./Components/Signup"
import Header from "./Components/Home/Header";
import About from "./Components/About";
import Search from "./Components/Search";
import Contact from "./Components/Contact";

function App() {
  return (
    <CartProvider>  
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Singleproduct />} />
          <Route path="/searchproduct" element={<Search/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </CartProvider>
  );
}

export default App;

