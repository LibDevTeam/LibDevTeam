import React, { useState, useEffect, useContext } from 'react';
import './BookDetails.css';
import SimilarBooks from './SimilarBooks';
import { useParams } from 'react-router-dom';
import { Loading2 } from './LoadingComponents';
import { GlobalContext } from './GlobalState';

function BookDeatils() {
    const { bookId } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const { user_data } = useContext(GlobalContext);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/api/v1/get/book?bookId=${bookId}`)
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setLoading(false);
            })
        }
        fetchData();
    }, [])

    const modalShow = (e) => {
        let modal = document.querySelector(".modal");
        modal.style.display = "block";
        modal.querySelector(".modal-image").src = e.src;
        modal.querySelector("#caption").innerHTML = e.alt;
        document.body.style.overflow = "hidden";
    }

    // const modalClose = () => {
    //     document.querySelector(".modal-image").src= null;
    //     document.querySelector(".modal").style.display = "none";
    // }

    if(loading) return <Loading2/>

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
                                    alt={data[0].properties.Name}
                                    loading="lazy"
                                    src={data[0].properties.Image}
                                />
                            </div>
                        </div>
                        <div className="book-button-container">
                            <ul>
                                <li>
                                    {
                                        (!user_data[2] || !user_data[2].find(book => book.identity.low == data[0].identity.low))
                                        ?<button>
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to wishlist
                                        </button>
                                        :<a href="/account/wishlist">Go to wishlist</a>
                                    }
                                </li>
                                <li>
                                    <form>
                                        <button type="button" style={{cursor: "not-allowed"}} disabled>
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
                                        <a href="/">
                                            <span>Books</span>
                                        </a>
                                    </li>
                                    <li className="trail-item trail-end">
                                        <a>
                                            <span>{data[0].properties.Name}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="book-title-tab">
                            <div className="book-title-wrapper">
                                <div className="book-name-container">
                                    <h1>
                                        <span>{data[0].properties.Name}</span>
                                    </h1>
                                </div>
                                <div className="book-taken-container">
                                    <span>(10)</span>
                                </div>
                                {
                                    data[0].properties.Count == 0 && <div className="book-items-left">Not available</div>
                                }
                                {
                                    data[0].properties.Count != 0 && data[0].properties.Count <= 5 && <div>Only {data[0].properties.Count} left</div>
                                }
                                {
                                    data[0].properties.Count > 5 && data[0].properties.Count < 10 && <div>Only a few left</div>
                                }
                            </div>
                        </div>
                        <div className="book-author-tab">
                            <div className="book-author-container">
                                <div className="book-author">Author</div>
                                <div className="book-author-name">{data[0].properties.Author}</div>
                            </div>
                        </div>
                        {
                            data[0].properties.Description && 
                            <div className="book-description-tab">
                                <div>
                                    <div className="book-description-tag">Description</div>
                                    <div className="book-description-content">{data[0].properties.Description}</div>
                                </div>
                            </div>
                        }
                        <div className="book-more-details-tab">
                            <div>
                                <div className="book-more-details-heading">More Details</div>
                                <ul>
                                    {
                                        data[0].properties.Language && 
                                        <li>
                                            <div>Language</div>
                                            <div>{data[0].properties.Language}</div>
                                        </li>
                                    }
                                    {
                                        data[0].properties.Binding && 
                                        <li>
                                            <div>Binding</div>
                                            <div>{data[0].properties.Binding}</div>
                                        </li>
                                    }
                                    {
                                        data[0].properties.Edition && 
                                        <li>
                                            <div>Edition</div>
                                            <div>{data[0].properties.Edition}</div>
                                        </li>
                                    }
                                    {
                                        data[0].properties.Publisher && 
                                        <li>
                                            <div>Publisher</div>
                                            <div>{data[0].properties.Publisher}</div>
                                        </li>
                                    }
                                    <li>
                                        <div>Subject</div>
                                        <div><a href={`/subject/${data[1].identity.low}`}>{data[1].properties.name}</a></div>
                                    </li>
                                    {
                                        data[0].properties.ISBN && 
                                        <li>
                                            <div>ISBN</div>
                                            <div>{data[0].properties.ISBN}</div>
                                        </li>
                                    }
                                    {
                                        data[0].properties.Pages && 
                                        <li>
                                            <div>Pages</div>
                                            <div>{data[0].properties.Pages}</div>
                                        </li>
                                    }
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
