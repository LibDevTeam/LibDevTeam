import React from 'react';
import './PreferredTopics.css';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useStateValue } from './StateProvider';

function PreferredTopics() {
    const [{ user_data }] = useStateValue();

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
                {
                    !user_data[1] && <div style={{color: "#fff"}}>Loading...<i className="fa fa-spinner fa-spin"></i></div>
                }
                {
                    user_data[1] && user_data[1].length === 0 && <div>Add your preferred subjects <a href="/">here</a></div>
                }
                {
                    user_data[1] && user_data[1].length !== 0 &&
                    <OwlCarousel
                        navText={["<i class='slick-nav fa fa-angle-left'></i>","<i class='slick-nav fa fa-angle-right'></i>"]}
                        className="owl-theme thunk-slide"
                        autoplay={true}
                        smartSpeed={1800}
                        responsiveClass={true}
                        responsive={{0:{items:Math.min(2,user_data[1].length)},767:{items:Math.min(3,user_data[1].length)},1024:{items:Math.min(4,user_data[1].length)}}}
                        dots={false}
                        loop
                        margin={15}
                        nav
                    >
                        {
                            user_data[1].map(subject => 
                                <div className="thunk-topic-wrap">
                                    <div className="thunk-topic">
                                        <div className="thunk-topic-image">
                                            <a href={`/subject/${subject.identity.low}`} className="topic-link">
                                                <img
                                                    style={{maxHeight: "300px", borderRadius: '3px'}}
                                                    loading="lazy"
                                                    alt={subject.properties.name}
                                                    src={subject.properties.img}
                                                />
                                            </a>
                                            <a href={`/subject/${subject.identity.low}`} className="thunk-topic-name-container">
                                                <div className="thunk-topic-name-wrapper">
                                                    <h2 className="thunk-topic-name">{subject.properties.name}</h2>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        )}
                    </OwlCarousel>
                }
            </div>
        </div>
    )
}

export default PreferredTopics
