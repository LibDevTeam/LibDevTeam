import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './AdsSection.css';

function AdsSection() {
    return (
        <div id="thunk-single-slider" className="ads-section">
            <Carousel className="Carousel"
                emulateTouch={true} 
                showArrows={true} 
                showStatus={false} 
                infiniteLoop={true}
                showThumbs={false} 
                swipeable={true} 
                autoPlay={true}
                stopOnHover={true}
                useKeyboardArrows={true}
                transitionTime={700}
                dynamicHeight={false}
            >
                <a href="">
                    <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Samsung/GW_Phase4_M31/D18533112_Jupiter2020_Phase4_SamsungM31_DesktopHero_Template_1500x600._CB416349920_.jpg" />
                </a>
                <a>
                    <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg" />
                </a>
            </Carousel>
        </div>
    )
}

export default AdsSection
