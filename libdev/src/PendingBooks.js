import React from 'react';
import './PendingBooks.css';

function PendingBooks() {
    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="pending-subtotal">
                        <span>Fine details</span>
                        <div>
                            <div>Total Fine (5 items)</div>
                            <span>₹300</span>
                        </div>
                    </div>
                    <div className="pending-list">
                        <div>
                            <div className="pending-heading">
                                <div className="pending-heading-wrapper">Pending Books</div>
                            </div>
                            <div className="order-product">
                                <div className="order-id-details">
                                    <div className="order-id">
                                        Order ID: 21976000065
                                        <span className="order-details-button">
                                            <a href="\orderDetails">
                                                <span>DETAILS</span>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="order-date">Placed on 20 May, 2018</div>
                                </div>
                                <div className="order-product-wrapper">
                                    <div className="order-product-details">
                                        <div>
                                            <div className="order-product-image">
                                                <img src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"/>
                                            </div>
                                            <div className="order-product-summary">
                                                <span className="order-product-title">Database Management System</span>
                                                <span className="order-product-author">Author</span>
                                                <span className="order-product-sanctioner">Sanctioned by: ABCD EFGH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-product-fine">
                                        ₹100
                                    </div>
                                    <div className="order-product-status">
                                        <div className="order-product-cardID">CARDNUM</div>
                                        <div className="order-product-statusDetail">
                                            Return to Pay
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-product">
                                <div className="order-id-details">
                                    <div className="order-id">
                                        Order ID: 21976000065
                                        <span className="order-details-button">
                                            <a href="\orderDetails">
                                                <span>DETAILS</span>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="order-date">Placed on 20 May, 2018</div>
                                </div>
                                <div className="order-product-wrapper">
                                    <div className="order-product-details">
                                        <div>
                                            <div className="order-product-image">
                                                <img src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"/>
                                            </div>
                                            <div className="order-product-summary">
                                                <span className="order-product-title">Database Management System aladin madafaka yo bitches</span>
                                                <span className="order-product-author">Author</span>
                                                <span className="order-product-sanctioner">Sanctioned by: ABCD EFGH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-product-fine">
                                        ₹100
                                    </div>
                                    <div className="order-product-status">
                                        <div className="order-product-cardID">CARDNUM</div>
                                        <div className="order-product-statusDetail">
                                            Pay now
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-product">
                                <div className="order-id-details">
                                    <div className="order-id">
                                        Order ID: 21976000065
                                        <span className="order-details-button">
                                            <a href="\orderDetails">
                                                <span>DETAILS</span>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="order-date">Placed on 20 May, 2018</div>
                                </div>
                                <div className="order-product-wrapper">
                                    <div className="order-product-details">
                                        <div>
                                            <div className="order-product-image">
                                                <img src="https://images-na.ssl-images-amazon.com/images/I/712XlaVQ8OL.jpg"/>
                                            </div>
                                            <div className="order-product-summary">
                                                <span className="order-product-title">Database Management System</span>
                                                <span className="order-product-author">Author</span>
                                                <span className="order-product-sanctioner">Sanctioned by: ABCD EFGH</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-product-fine">
                                        ₹100
                                    </div>
                                    <div className="order-product-status">
                                        <div className="order-product-cardID">CARDNUM</div>
                                        <div className="order-product-action">
                                            Return/Renew in 7 days to avoid fine
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingBooks
