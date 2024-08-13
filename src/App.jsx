import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import "./main.scss";

import "./App.css";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import SingleBlog from "./component/SingleBlog";
import BlogParent from "./component/BlogParent";
import ProductSingle from "./component/ProductSingle";
import ProductParent from "./component/ProductParent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<ProductParent />}>
            <Route index element={<Main />} />
            {/* <Route path=":id" element={<ProductSingle />} /> */}
          </Route>
          <Route path="/single-product">
            <Route path=":id" element={<ProductSingle />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogParent />}>
            <Route index element={<Blog />} />
            <Route path=":id" element={<SingleBlog />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
