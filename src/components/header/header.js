import PepsiLogo from '../../recourses/img/Pepsi-logo.png'
import './header.css';

function Header() {
    return (
    <>
       <header>
            <div className="whapper">

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

export default Header;