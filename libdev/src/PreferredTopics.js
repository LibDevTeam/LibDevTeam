import React from 'react';
import './PreferredTopics.css';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function PreferredTopics() {
    return (
        <div id="thunk-preferred_topics-tab" className="thunk-preferred_topics-tab">
            <div className="thunk-heading-wrap">
                <div className="thunk-heading">
                    <h4 className="thunk-title">
                        <span className="title">Your Subjects</span>
                    </h4>
                </div>
            </div>
            <div className="content-wrap">
                <OwlCarousel
                    navText={["<i class='slick-nav fa fa-angle-left'></i>","<i class='slick-nav fa fa-angle-right'></i>"]}
                    className="owl-theme thunk-slide"
                    autoplay={true}
                    smartSpeed={1800}
                    responsiveClass={true}
                    responsive={{0:{items:2},767:{items:3},1024:{items:3}}}
                    dots={false}
                    loop
                    margin={15}
                    nav
                >
                    <div className="thunk-topic-wrap">
                        <div className="thunk-topic">
                            <div className="thunk-topic-image">
                                <a href="/subject" className="topic-link">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/689406770607882240/7VEZDCfD_400x400.jpg"
                                        alt="topic"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="thunk-topic-wrap">
                        <div className="thunk-topic">
                            <div className="thunk-topic-image">
                                <a href="/subject" className="topic-link">
                                    <img alt="topic"
                                        src="https://pbs.twimg.com/profile_images/689406770607882240/7VEZDCfD_400x400.jpg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="thunk-topic-wrap">
                        <div className="thunk-topic">
                            <div className="thunk-topic-image">
                                <a href="/subject" className="topic-link">
                                    <img alt="topic"
                                        src="https://pbs.twimg.com/profile_images/689406770607882240/7VEZDCfD_400x400.jpg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="thunk-topic-wrap">
                        <div className="thunk-topic">
                            <div className="thunk-topic-image">
                                <a href="/subject" className="topic-link">
                                    <img alt="topic"
                                        src="https://pbs.twimg.com/profile_images/689406770607882240/7VEZDCfD_400x400.jpg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default PreferredTopics
