import React, { useState, useEffect, useContext } from 'react';
import Loading1, { Loading2 } from './LoadingComponents';
import './Search.css';
import { GlobalContext } from './GlobalState';

function Search() {
    const { user_data } = useContext(GlobalContext);
    const x = new URLSearchParams(window.location.search);
    const q = x.get('q');
    const subject = x.get('subject')
    const [data,setData] = useState([]);
    const [books,setBooks] = useState([]);
    const [initialLoading,setInitialLoading] = useState(true);
    const [per,setPer] = useState(20);
    const [page,setPage] = useState(0);
    const [loading,setLoading] = useState(false);
    const [totalPage,setTotalPage] = useState(0);

    const handleScroll = (e) => {
        const scrollUl = document.querySelector('ul.book-content');
        const lastLiOffset = scrollUl.offsetTop + scrollUl.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = -140;
        if(pageOffset > lastLiOffset - bottomOffset && page <= totalPage) {
            loadMore();
        }
    }

    const loadMore = () => {
        setLoading(true);
    }

    useEffect(() => {
        setInitialLoading(true);
        const fetchData = async () => {
            await fetch(`api/v1/get/searchCount?q=${q}&subject=${subject}`)
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setTotalPage(Math.ceil(apiData[0].low/per));
                setInitialLoading(false);
                setLoading(true);
            })
        }
        fetchData();
    },[])

    useEffect(() => {
        const loadUsers = async () => {
            if(page > 0) {
                const newUsers = await (await fetch(`/api/v1/get/search?q=${q}&subject=${subject}&page=${page}&per=${per}`)).json();
                setBooks(prev => [...prev, ...newUsers]);
                setLoading(false);
            }
        }
        loadUsers();
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[page,totalPage])

    console.log(data.length);

    useEffect(() => {
        if(!loading) return;
        setPage(page => page + 1);
    }, [loading]);

    if (initialLoading) return <Loading2/>
    
    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar">
                    <div className="subject-header">
                        <div className="subject-heading">
                            <h1>Searching results for: "{q}"</h1>
                        </div>
                        <ul className="thunk-breadcrumb trail-items">
                            <li className="trail-item trail-begin">
                                <a href="/">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="trail-item">
                                <a href="/all-category">
                                    <span>All Subjects</span>
                                </a>
                            </li>
                            {
                                data.length > 1 && 
                                <li className="trail-item trail-item-dept">
                                    <a href={`/all-category#category-table-${data[2].properties.code}`}>
                                        <span>{data[2].properties.code}</span>
                                    </a>
                                </li>
                            }
                            {
                                data.length > 1 &&
                                <li className="trail-item trail-end">
                                    <a>
                                        <span>{data[1].properties.name}</span>
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="book-list-items">
                    <div className="subject-1stLine">
                        <h1 className="category-name">
                            Results
                            <span className="category-count">({data[0].low} items)</span>
                        </h1>
                    </div>
                    <div className="clear-border"></div>
                    <ul className="book-content">
                        {data[0].low == 0 && !loading && <div style={{color: "#dd1c1c"}}>No book found</div>}
                        {
                            books.map(book => 
                                <li className="listli">
                                    <div className="trendingProduct">
                                        <a className="product-card" href={`/book/${book._fields[0].identity.low}`}>
                                            <div className={`product-img ${book._fields[0].properties.Count == 0 && 'product-na'}`}>
                                                <img
                                                    loading="lazy"
                                                    alt="book-image"
                                                    className="wooble"
                                                    src={book._fields[0].properties.Image}
                                                    onError={(e)=>{e.target.onerror = null; e.target.src="https://libyard.in/wp-content/uploads/woocommerce-placeholder-320x320.png"}}
                                                />
                                                {
                                                    book._fields[0].properties.Count == 0 &&
                                                    <div className="not-available-container">
                                                        <span>Not available</span>
                                                    </div>
                                                }
                                                <div className="add-to-wishlist">
                                                    <div>
                                                        {
                                                            (!user_data[2] || !user_data[2].find(wishlist => wishlist.identity.low == book._fields[0].identity.low))
                                                            ?<i className="fa fa-heart-o"></i>
                                                            :<i className="fa fa-heart"></i>
                                                        }
                                                    </div>
                                                </div>
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
                                </li>)
                        }
                        {loading && <Loading1/>}
                        {page > totalPage && data[0].low != 0 && !loading && <div>No more results</div>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
