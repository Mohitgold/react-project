import { useState } from "react";
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

function App() {
  //Cart Value count
  const [cartcount, setCartCount] = useState([]);

  const handleCartCount = (info) => {
    setCartCount([...cartcount, info]);
    // console.log(info);
  };
  console.log(cartcount);

  return (
    <>
      <BrowserRouter>
        <Header cartcount={cartcount} />
        <Routes>
          <Route
            path="/"
            element={<Main handleCartCount={handleCartCount} />}
          />
          <Route
            path="/single-product/:id"
            element={<ProductSingle handleCartCount={handleCartCount} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogParent />}>
            <Route index element={<Blog />} />
            <Route path=":id" element={<SingleBlog />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
