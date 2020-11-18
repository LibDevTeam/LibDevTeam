import React, { useEffect } from 'react';
import './Wishlist.css';

function Wishlist() {
    useEffect(() => {
        document.querySelector(".navigate-wishlist").classList.add(".navigate-active");
    }, [])
    return (
        <div className="account-section">
            <div className="wishlist-page">
                <div className="wishlist-title">
                    <span>My Wishlist (9)</span>
                </div>
                <div className="wishlist-product">
                    <div className="wishlist-product-image">
                        <a>
                            <div className="wishlist-product-image-wrapper">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"
                                    alt="Database Management system"
                                    title="Database Management system"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="wishlist-product-details">
                        <a className="wishlist-product-title">
                            <div>Book Name</div>
                        </a>
                        <a className="wishlist-product-author">
                            <div>Book Author</div>
                        </a>
                        <div className="wishlist-product-action">
                            <span>
                                <a><div className="cross">×</div> Remove from Wishlist</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="wishlist-product">
                    <div className="wishlist-product-image">
                        <a>
                            <div className="wishlist-product-image-wrapper">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"
                                    alt="Database Management system"
                                    title="Database Management system"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="wishlist-product-details">
                        <a className="wishlist-product-title">
                            <div>Book Name</div>
                        </a>
                        <a className="wishlist-product-author">
                            <div>Book Author</div>
                        </a>
                        <div className="wishlist-product-action">
                            <span>
                                <a><div className="cross">×</div> Remove from Wishlist</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="wishlist-product">
                    <div className="wishlist-product-image">
                        <a>
                            <div className="wishlist-product-image-wrapper">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"
                                    alt="Database Management system"
                                    title="Database Management system"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="wishlist-product-details">
                        <a className="wishlist-product-title">
                            <div>Book Name</div>
                        </a>
                        <a className="wishlist-product-author">
                            <div>Book Author</div>
                        </a>
                        <div className="wishlist-product-action">
                            <span>
                                <a><div className="cross">×</div> Remove from Wishlist</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="end-of-line">
                    <h5>End of list</h5>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
