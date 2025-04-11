import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const removeItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="main-container">
            <h1>Shopping Cart</h1>
            <div className="item-list">
                {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} alt={item.name} className="cart-image" />
                        <div className="cart-details">
                            <h4>{item.name}</h4>
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="last-part">
                <h3>Total: <span>${totalPrice.toFixed(2)}</span></h3>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
