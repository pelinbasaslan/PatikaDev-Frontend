import React from "react";
import './Balance.css'
import i18n from "./i18n";

function Balance({ balance }) {
    return (
        <section className="section-balance">
            <div className="balance-div">
                <p>{balance.toLocaleString(i18n.language, { style: "currency", currency: "USD" })}</p>
            </div>
        </section>
    )
}
export default Balance;