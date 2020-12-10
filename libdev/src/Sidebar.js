import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user_data}] = useStateValue();
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     setLoading(true);
    //     const fetchData = async () => {
    //         await fetch('/api/v1/get/subjects')
    //         .then(response => response.json())
    //         .then(apiData => {
    //             setData(apiData);
    //             setLoading(false);
    //         })
    //     }
    //     fetchData();
    // },[])

    const openMenu = () => {
        document.getElementById("product-cat-list").classList.toggle("hide-product-cat-list");
        document.getElementById("toggle-icon").classList.toggle("icon-circle-arrow-down");
    }
    return (
        <div id="sidebar-primary" className="sidebar-content-area sidebar-1 topstore-sticky-sidebar">
            <div className="StickySidebar">
                <div className="sidebar-main">
                    <div className="menu-category-list">
                        <div className="toggle-cat-wrap">
                            <p className="cat-toggle" onClick={openMenu}>
                                <span className="cat-icon">
                                    <span className="cat-top"></span>
                                    <span className="cat-top"></span>
                                    <span className="cat-bot"></span>
                                </span>
                                <span className="toggle-title">Category</span>
                                <span id="toggle-icon" className="toggle-icon"></span>
                            </p>
                        </div>
                        <ul id="product-cat-list" className="product-cat-list">
                            <li className="cat-item">
                                <a href="/subject/4">Electrical Machines</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/5">DBMS</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/6">Operating System</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/7">Machine Learning</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/8">Data Structures & Algorigthms</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/9">Computer Networks</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/10">Object Oriented Programming</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/11">Digital Electronics</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/12">Computer System Architecture</a>
                            </li>
                            <li className="cat-item">
                                <a href="/subject/13">Software Engineering</a>
                            </li>
                            <li className="cat-item">
                                <a href="/all-subjects">...see more</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
