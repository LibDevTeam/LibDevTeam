import React, { useState, useEffect } from 'react';
import Loading1 from './LoadingComponents';
import './Search.css';

function Search() {
    // console.log(window.location.search);
    const x = new URLSearchParams(window.location.search);
    const q = x.get('q');
    const subject = x.get('subject')
    // console.log(q,subject);
    const [data,setData] = useState([]);
    const [initialLoading,setInitialLoading] = useState(false);

    useEffect(() => {
        setInitialLoading(true);
        const fetchData = async () => {
            await fetch(`api/v1/get/search?q=${q}&page=1&per=20`)
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setInitialLoading(false);
            })
        }
        fetchData();
    },[])

    // console.log(data);

    if (initialLoading) return <Loading1/>
    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar">
                    <div className="subject-heading">
                        <h1>Searching results for: "{q}"</h1>
                    </div>
                </div>
                <div className="book-list-items">
                    <div className="subject-1stLine">
                        <h1 className="category-name">
                            Results
                            <span className="category-count">({data.length} items)</span>
                        </h1>
                    </div>
                    <div className="clear-border"></div>
                    <ul className="book-content">
                        {
                            data.map(book => 
                                <li className="listli">
                                    <div className="trendingProduct">
                                        <a className="product-card" href={`/book/${book._fields[0].identity.low}`}>
                                            <div className={`product-img ${book._fields[0].properties.Count == 0 && 'product-na'}`}>
                                                <img
                                                    loading="lazy"
                                                    alt="book-image"
                                                    className="wooble"
                                                    src={book._fields[0].properties.Image}
                                                />
                                                {
                                                    book._fields[0].properties.Count == 0 &&
                                                    <div className="not-available-container">
                                                        <span>Not available</span>
                                                    </div>
                                                }
                                            </div>
                                            <div className="stats-container">
                                                <div className="product-name">{book._fields[0].properties.Name}</div>
                                                <div className="product-author">
                                                    <div>
                                                        <span className="author-name">{book._fields[0].properties.Author}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
