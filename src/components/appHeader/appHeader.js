import React from 'react';
import { Helmet } from 'react-helmet';
import PepsiLogo from '../../recourses/img/Pepsi-logo.png'
import './appHeader.css';

function AppHeader() {
    return (
    <>
       <header>
            <div className="whapper">
                <Helmet>
                    <meta name="theme-color" content="#000" />
                    <meta name="description" content="home_page_pepsi" />
                    <title>Pepsi | Cherry taste</title>
                </Helmet>

             <img src={PepsiLogo} alt="pepsi_logo" />

                <ul className="list">
                    <a href="https://www.pepsi.com/#!products" className="inline-style">VIEW PRODUCTS</a>
                    <a href="https://contact.pepsico.com/pepsi" className="inline-style">CONTACT US</a>
                </ul>

                <a href="https://contact.pepsico.com/pepsi/product-locator" className="buy_more">BUY PEPSI PRODUCTS</a>
            </div>

    
       </header>
    </>
    )
}

export default AppHeader;