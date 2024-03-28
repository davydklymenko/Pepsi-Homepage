import HeroPepsi from '../../recourses/video/hero_pepsi.mp4';
import PepsiVideo from '../../recourses/video/pepsi_video.mp4';
import CansCherry from '../../recourses/img/canscherry.jpg';
import CherryBG from '../../recourses/img/cherrybg.png';
import GetWild from '../../recourses/img/get-wild-with-pepsi-wild-cherry.png'
import FAN1 from '../../recourses/img/cara.png';
import NurseryRhymez from '../../recourses/img/parents.png';


import './main.css';

function Main() {
    return (
        <>
            <main>
               <div className="whapper_main">
                <video controls="" controlslist="nodownload noremoteplayback" autoplay="true" loop="true" playsinline="true" muted="true">
                    <source src={HeroPepsi} type="video/mp4"></source>
                  </video>

                  <section className="wrapper_main">
                        <div className="presentation">
                            <img className="presentation_bg" src={CansCherry} alt="cherry_pepsi_presentation"/>
                        <div className="shop_now">
                            <a href="https://contact.pepsico.com/pepsi/product-locator" class="selector">SHOP NOW</a>
                        </div>
                    </div>
                </section>

                    <section className="whapper_cherry">
                        <div className="bg">
                            <img src={CherryBG} className="bg" alt="get_wild_wth_chrry"/>
                            <img className="getWildText" src={GetWild} alt="acticle" />

                            <div className="whapper_previews">
                                <div className="preview">
                                        <img className="video_preview" src={FAN1} alt="#1FAN" />
                                        <a href="https://youtu.be/HdTLFFUcjzQ" className="selector" >#1 FAN</a>
                                    </div>

                                    <div className="preview">
                                        <img className="video_preview" src={NurseryRhymez} alt="Nursery_Rhymez" />
                                        <a href="https://youtu.be/fLkpkst5mk8" className="selector" >NURSERY RHYMEZ</a>
                                    </div>
                            </div>
                        </div>
                        </section>

                  <video controls="" controlslist="nodownload noremoteplayback" class="other__video" kind="captions" type="video/mp4" autoplay="true" loop="true" playsinline="true" muted="true">
                    <source src={PepsiVideo} type="video/mp4"></source>
                  </video>
               </div>
            </main>
        </>
    );
}

export default Main;