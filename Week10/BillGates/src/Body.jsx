import React from "react";
import './Body.css'
import { useState } from "react";
import i18n from "./i18n";

function Body({ product, buy, sell, balance, quantity }) {
    const [inputValue, setInputValue] = useState(quantity);

    const handleChange = (e) => {
        const newQuantity = Number(e.target.value) || 0;
        const difference = newQuantity - quantity;

        if (difference > 0) {
            buy(product, difference);
        } else if (difference < 0) {
            sell(product, -difference);
        }

        setInputValue(newQuantity);
    };
    return (
        <section className="body">
            <div className="body-container">
                <div className="card">
                    <img src={`images/${product.image}`} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price.toLocaleString(i18n.language, { style: "currency", currency: "USD" })}</p>
                    <div className="buttons">
                        <button onClick={() => sell(product, 1)}
                            disabled={quantity === 0}
                            className="sell-button">Sell
                        </button>
                        <textarea

                            name="amount"
                            id="amount"
                            value={inputValue || quantity}
                            onChange={handleChange}
                            min="0"
                        />
                        <button onClick={() => buy(product, 1)}
                            disabled={balance < product.price}
                            className="buy-button">Buy
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Body;