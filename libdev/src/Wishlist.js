import React, { useEffect } from 'react';
import './Wishlist.css';
import Loading1 from './LoadingComponents';
import { useStateValue } from './StateProvider';

function Wishlist() {
    const [{ user_data }] = useStateValue();

    useEffect(() => {
        document.querySelector(".navigate-wishlist").classList.add(".navigate-active");
    }, [])

    return (
        <div className="account-section">
            <div className="wishlist-page">
                <div className="wishlist-title">
                    <span>My Wishlist {user_data[2]?`(${user_data[2].length})`:''}</span>
                </div>
                {
                    !user_data[2] && <Loading1/>
                }
                {
                    user_data[2] && user_data[2].length === 0 && <div>No books found in wishlist</div>
                }
                {
                    user_data[2] &&
                    user_data[2].map(book => 
                        <div className="wishlist-product">
                            <div className="wishlist-product-image">
                                <a href={`/book/${book.identity.low}`}>
                                    <div className="wishlist-product-image-wrapper">
                                        <img
                                            loading="lazy"
                                            src={book.properties.Image}
                                            alt={book.properties.Name}
                                            title={book.properties.Name}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="wishlist-product-details">
                                <a href={`/book/${book.identity.low}`} className="wishlist-product-title">
                                    <div>{book.properties.Name}</div>
                                </a>
                                <a href={`/book/${book.identity.low}`} className="wishlist-product-author">
                                    <div>{book.properties.Author}</div>
                                </a>
                                <div className="wishlist-product-action">
                                    <span>
                                        <div>
                                            <div className="cross">×</div> Remove from Wishlist
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    user_data[2] &&
                    <div className="end-of-line">
                        <h5>End of list</h5>
                    </div>
                }
            </div>
        </div>
    )
}

export default Wishlist
