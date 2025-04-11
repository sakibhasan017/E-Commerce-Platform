import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner2.jpg";
import "./Home.css"; 

function Home() {
  
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <section className="home">
      <div className="home-body">
        <div className="home-left">
          <h1>Welcome to MyShop</h1>
          <p>
            Discover the best products for your needs. Shop now and enjoy
            exclusive deals!
          </p>
          <Link to="/products" className="explore-btn">Explore Products</Link>
        </div>
        <img src={banner} alt="Shop Banner" className="home-banner" />
      </div>
      <div className="normal-text">
        <p>Click on the "Products" link in the navigation bar to view our latest products</p>
      </div>
    </section>
  );
}

export default Home;
