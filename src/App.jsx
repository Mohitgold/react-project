import { createContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Main from "./Pages/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import "./main.scss";

import "./App.css";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import BlogParent from "./component/BlogParent";
import ProductSingle from "./Pages/ProductSingle";
import Cart from "./Pages/Cart";
import Avatar from "./Pages/Avatar";

export const ecomContext = createContext(null);

function App() {
  //Cart Value count
  const [cartcount, setCartCount] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const handleCartCount = (info) => {
    // Check if the product already exists in the cart
    const productExists = cartcount.some((item) => item.id === info.id);
    // console.log(productExists);
    if (productExists) {
      // alert("Product already added to cart!");
      setModalShow(true);
    } else {
      setCartCount([...cartcount, info]);
    }
  };
  const closeModal = () => {
    setModalShow(false);
  };
  // console.log(cartcount);

  return (
    <>
      <BrowserRouter>
        <ecomContext.Provider
          value={{
            cartcount,
            modalShow,
            closeModal,
            handleCartCount,
            setCartCount,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/single-product/:id" element={<ProductSingle />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogParent />}>
              <Route index element={<Blog />} />
              <Route path=":id" element={<SingleBlog />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/avatar" element={<Avatar />} />
          </Routes>
          <Footer />
        </ecomContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
