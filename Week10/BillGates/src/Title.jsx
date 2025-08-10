import React from "react";
import './Title.css'
import billgates from './images/billgates.webp'
function Title() {
    return (
        <section className="section-title">
            <div className="title">
                <img src={billgates} class="header-img" />
                <p>Spend Bill Gates' Money</p>
            </div>
        </section>
    )
}
export default Title;