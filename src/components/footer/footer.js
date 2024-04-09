import Inst from '../../recourses/social media/Instagram.png';
import X from '../../recourses/social media/twitter.png';
import FB from '../../recourses/social media/facebook.png';
import YT from '../../recourses/social media/youtube.png';
import TT from '../../recourses/social media/tiktok.png';
import Threads from '../../recourses/social media/THREADS.png';
import PepsiLogo from '../../recourses/img/Pepsi-logo.png';

import './footer.css';

function Footer() {
    return (
        <>
            <footer>
                    <div className="whapper_footer">
                        <div className="black-social-media">
                            <p className="title-black-social-media">STAY ON THE PULSE. FOLLOW PEPSI.</p>

                            <div className="social-media">
                                <div className="inst">
                                  <a href="https://www.instagram.com/pepsi" style={{position: 'relative', display: 'inline-block'}}>
                                   <img src={Inst} alt="s-m" style={{border: '3px blue solid', cursor: 'pointer', 'max-height': '310px', 'max-width': '310px', transition: '.3s'}} />
                                     <i className="fa-brands fa-instagram fa-2x" style={{opacity: '.8', color: '#fff', position: 'absolute', bottom: '15px', left: '15px'}}></i>
                                   </a>
                                </div>

                                <div className="x">
                                    <a href="https://twitter.com/pepsi"  style={{position: 'relative', display: 'inline-block'}}>
                                     <img src={X} alt="s-m" style={{border: '3px blue solid', cursor: 'pointer', 'max-height': '310px', 'max-width': '310px', transition: '.3s'}} />
                                      <i className="fa-brands fa-x-twitter fa-2x" style={{opacity: '.8', color: '#fff', position: 'absolute', bottom: '15px', left: '15px'}}></i>
                                    </a>
                                </div>

                                <div className="fb">
                                    <a href="https://www.facebook.com/PepsiUS" style={{position: 'relative', display: 'inline-block'}}>
                                      <img src={FB} alt="s-m" style={{border: '3px blue solid', cursor: 'pointer', 'max-height': '310px', 'max-width': '310px', transition: '.3s'}} />
                                      <i className="fa-brands fa-facebook fa-2x" style={{opacity: '.8', color: '#fff', position: 'absolute', bottom: '15px', left: '15px'}}></i>
                                    </a>
                                </div>

                                <div className="yt">
                                    <a href="https://www.youtube.com/user/Pepsi" style={{position: 'relative', display: 'inline-block'}}>
                                      <img src={YT} alt="s-m" style={{border: '3px blue solid', cursor: 'pointer', 'max-height': '310px', 'max-width': '310px', transition: '.3s'}} />
                                      <i className="fa-brands fa-youtube fa-2x" style={{opacity: '.8', color: '#fff', position: 'absolute', bottom: '15px', left: '15px'}}></i>
                                    </a>
                                </div>

                                <div className="tt">
                                    <a href="https://www.tiktok.com/@pepsi" style={{position: 'relative', display: 'inline-block'}}>
                                      <img src={TT} alt="s-m" style={{border: '3px blue solid', cursor: 'pointer', 'max-height': '310px', 'max-width': '310px', transition: '.3s'}} />
                                      <i className="fa-brands fa-tiktok fa-2x" style={{opacity: '.8', color: '#fff', position: 'absolute', bottom: '15px', left: '15px'}}></i>
                                    </a>
                                </div>

                                <div className="theards">
                                    <a href="https://www.threads.net/@pepsi" style={{position: 'relative', display: 'inline-block'}}>
                                     <img src={Threads} alt="s-m" style={{border: '3px blue solid', cursor: 'pointer', 'max-height': '310px', 'max-width': '310px', transition: '.3s'}} />
                                     <i className="fa-brands fa-threads fa-2x" style={{opacity: '.8', color: '#fff', position: 'absolute', bottom: '15px', left: '15px'}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="blue-footer">
                            <img style={{cursor: 'pointer', 'max-height': "130px", 'max-width': "230px"}} src={PepsiLogo} alt="pepsi_logo" />

                            <div className="info-links">
                                 <ul>
                                    <li><a href="https://contact.pepsico.com/pepsi">CONTACT US</a></li>
                                    <li><a href="https://www.pepsi.com/en-us/terms">TERMS & CONDITIONS</a></li>
                                    <li><a href="http://policy.pepsi.com/privacy.htm">PRIVACI POLICY</a></li>
                                 </ul>
                            </div>

                            <div className="info-links-2">
                                 <ul>
                                    <li><a href="https://www.pepsi.com/en-us/copyright">COPYRIGHT</a></li>
                                    <li><a href="http://www.pepsicobeveragefacts.com/">PRODUCT FACTS</a></li>
                                    <li><a href="https://contact.pepsico.com/pepsi/product-locator">STORE LOCATOR</a></li>
                                 </ul>
                            </div>

                            <div className="info-links-3">
                                <ul>
                                    <li><a href="https://www.pepsicopartners.com/pepsico/en/USD/partner/leadgeneration">SERVE PEPSI</a></li>
                                    <li><a href="http://policy.pepsi.com/aboutads.htm">ABOUT OUR ADS</a></li>
                                    <li><a href="https://pepsifrontlinecareers.com/">CAREERS</a></li>
                                </ul>
                            </div>

                            <div className="links">
                                 <a href="https://www.instagram.com/pepsi" className="fab fa-instagram fa-2x"> </a>
                                 <a href="https://twitter.com/pepsi" className="fab fa-x-twitter fa-2x"> </a>
                                 <a href="https://www.facebook.com/PepsiUS" className="fab fa-facebook fa-2x"> </a>
                                 <a href="https://www.youtube.com/user/Pepsi" className="fab fa-youtube fa-2x"> </a>
                                 <a href="https://www.tiktok.com/@pepsi" className="fab fa-tiktok fa-2x"> </a>
                                 <a href="https://www.threads.net/@pepsi" className="fab fa-threads fa-2x"> </a>
                            </div>
                        </div>
                    </div>
            </footer>
            </>
    )
}

export default Footer;