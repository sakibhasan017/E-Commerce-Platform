import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      </div>
    </Router>
  );
}

export default App;
