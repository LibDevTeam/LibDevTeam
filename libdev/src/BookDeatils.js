import { Button } from '@material-ui/core';
import React from 'react';
import './BookDetails.css';
import SimilarBooks from './SimilarBooks';

function BookDeatils() {
    const modalShow = (e) => {
        let modal = document.querySelector(".modal");
        modal.style.display = "block";
        // console.log(modal.querySelector(".modal-image"));
        modal.querySelector(".modal-image").src = e.src;
        modal.querySelector("#caption").innerHTML = e.alt;
        document.body.style.overflow = "hidden";
    }

    const modalClose = () => {
        document.querySelector(".modal-image").src= null;
        document.querySelector(".modal").style.display = "none";
    }

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area main-area-product-details">
                    <div className="book-image-section">
                        <div className="book-image-container">
                            <div>
                                <img
                                    onClick={(e) => {modalShow(e.target)}}
                                    className="book-details-image"
                                    alt="Database Management System"
                                    loading="lazy"
                                    src="https://rukminim1.flixcart.com/image/416/416/jpu324w0/book/7/4/1/database-management-system-original-imafbzz7nwqhg6dn.jpeg?q=70"
                                />
                            </div>
                        </div>
                        <div className="book-button-container">
                            <ul>
                                <li>
                                    <button>
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to wishlist
                                    </button>
                                </li>
                                <li>
                                    <form>
                                        <button type="button">
                                            Order now
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="book-details-section">
                        <div className="page-address-tab">
                            <div>
                                <ul className="thunk-breadcrumb trail-items">
                                    <li className="trail-item trail-begin">
                                        <a href="/">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li className="trail-item">
                                        <a>
                                            <span>Books</span>
                                        </a>
                                    </li>
                                    <li className="trail-item trail-end">
                                        <a>
                                            <span>Database Manage System</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="book-title-tab">
                            <div className="book-title-wrapper">
                                <div className="book-name-container">
                                    <h1>
                                        <span>Database Management System (English, Paperback, Pakhira Malay k.)</span>
                                    </h1>
                                </div>
                                <div className="book-taken-container">
                                    <span>(10)</span>
                                </div>
                                <div className="book-items-left">Only a few left</div>
                            </div>
                        </div>
                        <div className="book-author-tab">
                            <div className="book-author-container">
                                <div className="book-author">Author</div>
                                <div className="book-author-name">Pakhira Malay K.</div>
                            </div>
                        </div>
                        <div className="book-description-tab">
                            <div>
                                <div className="book-description-tag">Description</div>
                                <div className="book-description-content">
                                    Malay K. Pakhira’s Database Management System, published by Phi Learning, is a comprehensive book for Computer Science and Information Science students. It comprises of fundamental concepts explained in simple and lucid language for better comprehension. The book is updated with the trending developments in the field and has extensive examples and real time problems and solution for better practice.
                                </div>
                            </div>
                        </div>
                        <div className="book-more-details-tab">
                            <div>
                                <div className="book-more-details-heading">More Details</div>
                                <ul>
                                    <li>
                                        <div>Language</div>
                                        <div>English</div>
                                    </li>
                                    <li>
                                        <div>Binding</div>
                                        <div>Paperback</div>
                                    </li>
                                    <li>
                                        <div>Publisher</div>
                                        <div>PHI Learning</div>
                                    </li>
                                    <li>
                                        <div>Subject</div>
                                        <div>DBMS</div>
                                    </li>
                                    <li>
                                        <div>ISBN</div>
                                        <div>9788120346741</div>
                                    </li>
                                    <li>
                                        <div>Pages</div>
                                        <div>268</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="similar-books">
                    <SimilarBooks/>
                </div>
            </div>
        </div>
    )
}

export default BookDeatils
