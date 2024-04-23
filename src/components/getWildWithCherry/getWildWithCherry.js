import './getWildWithCherry.css';
import React from 'react';

import CherryBG from '../../recourses/img/cherrybg.png';
import GetWild from '../../recourses/img/get-wild-with-pepsi-wild-cherry.png';
import FAN1 from '../../recourses/img/cara.png';
import NurseryRhymez from '../../recourses/img/parents.png';

function GetWildWithCherry() {
    return(
        <>
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
        </>
    )
}

export default GetWildWithCherry;
