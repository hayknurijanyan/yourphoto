import React, { Component } from 'react';

class Products extends Component {

    render(){
        return(
            <>
            <section id="prints">
            <header className="prints-header">
                <h1 className="section-title">Explore features of Photo Prints
                </h1>
                <ul className="prints-header-items">
                    <li className="prints-header-item1 standard product-button active">STANDARD PRINTS</li>
                    <li className="prints-header-item2 special product-button">SPECIAL PRINTS</li>
                    <li className="prints-header-item3 collage product-button">COLLAGE</li>
                    <li className="prints-header-item4 calendar product-button">CALENDAR</li>
                    <li className="prints-header-item5 store product-button">STORE</li>
                    <li className="">SEE ALL</li>
                </ul>
            </header>
         
        </section>
        </>
        )
    }
}

export default Products