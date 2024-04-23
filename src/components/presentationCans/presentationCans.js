import './presentationCans.css';
import React from 'react';

import CansCherry from '../../recourses/img/canscherry.jpg';

function PresentationCans() {
    return (
        <>
            <section className="wrapper_main">
                        <div className="presentation">
                            <img className="presentation_bg" src={CansCherry} alt="cherry_pepsi_presentation"/>
                        <div className="shop_now">
                            <a href="https://contact.pepsico.com/pepsi/product-locator" className="selector">SHOP NOW</a>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default PresentationCans;