import React, { Component } from 'react';
import './SubjectDetail.css';

export default class SubjectDetail extends Component {
    state = {
        contacts: [],
        per: 20,
        page: 1,
        // totalPages: null,
        scrolling: false,
    }

    componentWillMount() {
        this.loadContacts();
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    }

    handleScroll = (e) => {
        const { scrolling, totalPages, page } = this.state;
        if(scrolling) return;
        // if(totalPages <= page) return;
        const lastLi = document.querySelector('.listli:last-child');
        const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if(pageOffset > lastLiOffset - bottomOffset) this.loadMore();
    }

    loadContacts = () => {
        const { per, page, contacts } = this.state
        const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${per}`
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({
            contacts: [...contacts, ...json],
            scrolling: false,
            // totalPages: json.total_pages,
        }))
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
            scrolling: true,
        }), this.loadContacts)
    }
    render() {
        return (
            <div className="content-wrap" style={{transform: "none"}}>
                <div className="container" style={{transform: "none"}}>
                    <div className="main-area disable-right-sidebar" style={{transform: "none"}}></div>
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
                        <div className="book-list-items">
                            <ul>
                                {
                                    this.state.contacts.map(contact => 
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
                                                            <span className="author-name">Author Name</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}
