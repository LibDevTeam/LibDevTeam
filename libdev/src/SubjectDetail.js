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
            <div>
                <ul>
                    {
                        this.state.contacts.map(contact => <li className="listli" style={{height: "90px"}} key={contact.id}>
                            <div>hii</div>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}
