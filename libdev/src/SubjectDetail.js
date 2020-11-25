import React, { useEffect, useState } from 'react';
import './SubjectDetail.css';
// import { useParams } from 'react-router-dom';

function SubjectDetail() {
    const [page,setPage] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [per] = useState(20);

    const handleScroll = (e) => {
        const scrollUl = document.querySelector('ul.book-content');
        const lastLiOffset = scrollUl.offsetTop + scrollUl.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = -140;
        if(pageOffset > lastLiOffset - bottomOffset) {
            loadMore();
        }
    }

    useEffect(() => {
        const loadUsers = async () => {
            if(page > 0) {
                const newUsers = await (await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${per}`)).json();
                setUsers(prev => [...prev, ...newUsers]);
                setLoading(false);
            }
        }
        loadUsers();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[page])

    useEffect(() => {
        if(!loading) return;
        setPage(page => page + 1);
    }, [loading]);

    const loadMore = () => {
        setLoading(true);
    }

    const showOptions = () => {
        // if(document.querySelector(".book-list-items>.subject-1stLine>.sorting-sec>ul").className == "sort-value hidden") {
        //     document.querySelector(".book-list-items>.subject-1stLine>.sorting-sec>ul").className = "sort-value";
        // }
        console.log('yet to be declared');
    }

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="subject-header">
                        <div className="subject-heading">
                                <h1>DBMS</h1>
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
                            <li className="trail-item">
                                <a href="/all-category#category-table-cse">
                                    <span>CSE</span>
                                </a>
                            </li>
                            <li className="trail-item trail-end">
                                <a>
                                    <span>Database Management System</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="book-list-items">
                        <div className="subject-1stLine">
                            <h1 className="category-name">
                                Results
                                <span className="category-count">(xyz items)</span>
                            </h1>
                            <div className="searchBox">
                                <input
                                    type="text"
                                    placeholder="Search within category"
                                    id="searchWithinSearch"
                                    className="sd-input"
                                />
                                <div id="swsIco">
                                    <span>
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="sorting-sec animBounce">
                                <div className="sort-drop clearfix" onClick={showOptions}>
                                    <span className="sort-label">Sort by:</span>
                                    <div className="sort-selected">Alphabetical</div>
                                    <i className="fa fa-angle-down"></i>
                                </div>
                                <ul className="sort-value hidden" style={{zIndex: "77"}}>
                                    <li className="search-li sort-active">
                                        <span className="arrow"></span>
                                        Alphabetical
                                    </li>
                                    <li className="search-li sort-active">
                                        <span className="arrow"></span>
                                        Date new to old
                                    </li>
                                    <li className="search-li sort-active">
                                        <span className="arrow"></span>
                                        Date old to new
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear-border"></div>
                        <ul className="book-content">
                            {
                                users.map(contact => 
                                <li className="listli">
                                    <div className="trendingProduct">
                                        <a className="product-card" href="">
                                            <div className="product-img">
                                                <img
                                                    className="wooble"
                                                    src="https://images-na.ssl-images-amazon.com/images/I/514nzbCsaaL._SX352_BO1,204,203,200_.jpg"
                                                />
                                            </div>
                                            <div className="stats-container">
                                                <div className="product-name">Book Name</div>
                                                <div className="product-author">
                                                    <div>
                                                        <span className="author-name">Author Name {contact.id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>)
                            }
                            {loading && <div>Loading......</div>}
                        </ul>
                        <button onClick={loadMore}>Load more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectDetail
