import React from 'react';
import AdsSection from './AdsSection';
import './Home.css';
import PreferredTopics from './PreferredTopics';
import RecentlyAdded from './RecentlyAdded';
import Sidebar from './Sidebar';
import TrendingNow from './TrendingNow';

function Home() {
    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <Sidebar/>
                    <div className="primary-content-area">
                        <div className="primary-content-wrap">
                            {/* <section className="thunk-slider-section">
                                <AdsSection/>
                            </section> */}
                            <section className="thunk-prferred-topics-section">
                                <PreferredTopics/>
                            </section>
                            <section>
                                <RecentlyAdded/>
                            </section>
                            <section>
                                <TrendingNow/>
                            </section> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
