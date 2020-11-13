import React from 'react';
import './SimilarBooks.css';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SimilarBooks() {
    return (
        <div id="thunk-similar_books-tab" className="thunk-similar_books-tab">
            <div className="thunk-heading-wrap">
                <div className="thunk-heading">
                    <h4 className="thunk-title">
                        <span className="title">Similar Books</span>
                    </h4>
                </div>
            </div>
            <div className="content-wrap">
                <OwlCarousel
                    navText={["<i class='slick-nav fa fa-angle-left'></i>","<i class='slick-nav fa fa-angle-right'></i>"]}
                    className="owl-theme thunk-slide"
                    // autoplay={true}
                    smartSpeed={400}
                    responsiveClass={true}
                    responsive={{0:{items:2},767:{items:3},1024:{items:4}}}
                    dots={false}
                    loop
                    margin={0}
                    nav={true}
                    autoplayHoverPause={true}
                >
                    <div className="trendingProduct">
                        <a className="product-card" href="">
                            <div className="product-img">
                                <img
                                    className="wooble"
                                    src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"
                                />
                            </div>
                            <div className="stats-container">
                                <div className="product-name">Book Name</div>
                                <div className="product-author">
                                    <div>
                                        <span className="author-name">Author Name</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="trendingProduct">
                        <a className="product-card" href="">
                            <div className="product-img">
                                <img
                                    className="wooble"
                                    src="https://images-na.ssl-images-amazon.com/images/I/514nzbCsaaL._SX352_BO1,204,203,200_.jpg"
                                />
                            </div>
                            <div className="stats-container">
                                <div className="product-name">Product Name</div>
                                <div className="product-author">
                                    <div>
                                        <span className="author-name">Author Name</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default SimilarBooks
