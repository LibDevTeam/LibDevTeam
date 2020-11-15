import React from 'react';
import './Sidebar.css';

function Sidebar() {
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
                            <li className="cat-item cat-item-1">
                                <a href="/subject">Category 1</a>
                            </li>
                            <li className="cat-item cat-item-2">
                                <a href="/subject">Category 2</a>
                            </li>
                            <li className="cat-item cat-item-1">
                                <a href="/subject">Category 1</a>
                            </li>
                            <li className="cat-item cat-item-3">
                                <a href="/all-category">. . . All Category</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
