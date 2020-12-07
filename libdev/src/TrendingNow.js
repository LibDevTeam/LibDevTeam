import React, { useState, useEffect, useContext } from 'react';
import './TrendingNow.css';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GlobalContext } from './GlobalState';

function TrendingNow() {
    const { user_data } = useContext(GlobalContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            await fetch('/api/v1/get/recentlyAddedBooks')
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setLoading(false);
            })
        }
        fetchData();
    }, [])

    if(loading) return <div>Loading...</div>

    return (
        <div id="thunk-trending_now-tab" className="thunk-trending_now-tab">
            <div className="thunk-heading-wrap">
                <div className="thunk-heading">
                    <h4 className="thunk-title">
                        <span className="title">Trending Now</span>
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
                    responsive={{0:{items:2},767:{items:3},1024:{items:4}}}
                    dots={false}
                    loop
                    margin={0}
                    nav={true}
                    autoplayHoverPause={true}
                >
                    {
                        data.map(book => 
                            <div className="trendingProduct">
                                <a className="product-card" href={`/book/${book.identity.low}`}>
                                    <div className={`product-img ${book.properties.Count == 0 && 'product-na'}`}>
                                        <img
                                            loading="lazy"
                                            alt="product"
                                            className="wooble"
                                            src={book.properties.Image}
                                        />
                                        {book.properties.Count == 0  && 
                                            <div className="not-available-container">
                                                <span>Not available</span>
                                            </div>
                                        }
                                        <div className="add-to-wishlist">
                                            <div>
                                                {
                                                    (!user_data[2] || !user_data[2].find(wishlist => wishlist.identity.low == book.identity.low))
                                                    ?<i className="fa fa-heart-o"></i>
                                                    :<i className="fa fa-heart"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stats-container">
                                        <div className="product-name">{book.properties.Name}</div>
                                        <div className="product-author">
                                            <div>
                                                <span className="author-name">{book.properties.Author}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default TrendingNow
