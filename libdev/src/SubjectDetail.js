import React, { useEffect, useState } from 'react';
import './SubjectDetail.css';
import { useParams } from 'react-router-dom';
import Loading1, { Loading2 } from './LoadingComponents';

function SubjectDetail() {
    const { subjectId } = useParams();
    const [page, setPage] = useState(0);
    const [books, setBooks] = useState([]);
    const [initialLoading,setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [per, setPer] = useState(20);
    const [totalPage, setTotalPage] = useState(0);
    const [data, setData] = useState({
        subjectId: "Subject id",
        subjectName: "Subject Name",
        subjectImg: "Subject img",
        subjectBookCount: "number",
        dept: {
            id: "Dept. id",
            name: "Dept. name",
            code: "Dept. code"
        }
    });

    const handleScroll = (e) => {
        const scrollUl = document.querySelector('ul.book-content');
        const lastLiOffset = scrollUl.offsetTop + scrollUl.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = -140;
        if(pageOffset > lastLiOffset - bottomOffset && page <= totalPage) {
            loadMore();
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/api/v1/get/subject?subjectId=${subjectId}`)
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setTotalPage(Math.ceil(apiData.subjectBookCount/per));
                setInitialLoading(false);
                setLoading(true);
            })
        }
        fetchData();
    },[])

    useEffect(() => {
        const loadUsers = async () => {
            if(page > 0) {
                const newUsers = await (await fetch(`/api/v1/get/books?subjectId=${subjectId}&page=${page}&limit=${per}`)).json();
                setBooks(prev => [...prev, ...newUsers]);
                setLoading(false);
            }
        }
        loadUsers();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[page,totalPage])

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

    if(initialLoading) return <Loading2/>

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="subject-header">
                        <div className="subject-heading">
                            <h1>{data.subjectName} <i style={{color: "#fdcc0d"}} className="fa fa-star" aria-hidden="true"></i></h1>
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
                            <li className="trail-item trail-item-dept">
                                <a href={`/all-category#category-table-${data.dept.code}`}>
                                    <span>{data.dept.code}</span>
                                </a>
                            </li>
                            <li className="trail-item trail-end">
                                <a>
                                    <span>{data.subjectName}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="book-list-items">
                        <div className="subject-1stLine">
                            <h1 className="category-name">
                                Results
                                <span className="category-count">({data.subjectBookCount} items)</span>
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
                            {data.subjectBookCount == 0 && !loading && <div style={{color: "#dd1c1c"}}>No book found. Go to <a href="/">Home Page</a></div>}
                            {
                                books.map(book => 
                                <li className="listli">
                                    <div className="trendingProduct">
                                        <a className="product-card" href={`/book/${book.identity.low}`}>
                                            <div className="product-img">
                                                <img
                                                    loading="lazy"
                                                    alt="book-image"
                                                    className="wooble"
                                                    src={book.properties.Image}
                                                />
                                                {book.properties.Count == 0  && 
                                                    <div className="not-available-container">
                                                        <span>Not available</span>
                                                    </div>
                                                }
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
                                </li>)
                            }
                            {loading && <Loading1/>}
                            {page > totalPage && data.subjectBookCount != 0 && !loading && <div>No more results</div>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectDetail
