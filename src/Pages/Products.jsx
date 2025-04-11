import React from "react";
import product1 from "../assets/images/product.jpg";
import product2 from "../assets/images/product1.jpg";
import product3 from "../assets/images/product2.jpg";
import product4 from "../assets/images/product3.avif";
import "./Products.css";

const products = [
    { id: 1, name: "Product 1", price: 25.00, image: product1 },
    { id: 2, name: "Product 2", price: 25.00, image: product2 },
    { id: 3, name: "Product 3", price: 30.00, image: product3 },
    { id: 4, name: "Product 4", price: 40.00, image: product4 },
];

function Products() {

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="products-container">
            <div className="product-up">
            <h1>Our Products</h1>
            <p>Explore our latest collection</p>
            </div>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>${product.price.toFixed(2)}</p>
                        <button className="product-btn" onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
