import React from 'react';
import './AllCategory.css';

function AllCategory() {
    const showMoreLess = (value) => {
        document.querySelector(`#category-table-${value}`).classList.toggle("hide-table");
        if(document.querySelector(`.button-toggle-${value}`).querySelector(".fa").className == "fa fa-angle-down") {
            document.querySelector(`.button-toggle-${value}`).querySelector(".fa").className = "fa fa-angle-up";
        }
        else {
            document.querySelector(`.button-toggle-${value}`).querySelector(".fa").className = "fa fa-angle-down";
        }
    }

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="category-box">
                        <ul>
                            <li>
                                <a href="#category-table-cse">
                                    <span>Computer Science & Engineering</span>
                                </a>
                            </li>
                            <li>
                                <a  href="#category-table-etce">
                                    <span>Electronics & Telecommunications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-ee">
                                    <span>Electrical</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-it">
                                    <span>Information Technology</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-me">
                                    <span>Mechanical</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-che">
                                    <span>Chemical</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-ce">
                                    <span>Civil</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-arch">
                                    <span>Architecture</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-pharm">
                                    <span>Pharmacy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-meta">
                                    <span>Metallurgy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#category-table-inst">
                                    <span>Intrumentation</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="category-tab">
                        <div id="category-table-cse" className="category-table category-table-cse hide-table">
                            <div className="category-name">
                                <span>Computer Science & Engineering</span>
                            </div>
                            <div className="category-table-content">
                                <ul>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="button-toggle button-toggle-cse" onClick={() => {showMoreLess('cse')}}>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </div>
                        </div>
                        <div id="category-table-etce" className="category-table category-table-etce hide-table">
                            <div className="category-name">
                                <span>Electronics & Telecommunications</span>
                            </div>
                            <div className="category-table-content">
                                <ul>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="button-toggle button-toggle-etce" onClick={() => {showMoreLess('etce')}}>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </div>
                        </div>
                        <div id="category-table-ee" className="category-table category-table-ee hide-table">
                            <div className="category-name">
                                <span>Electrical</span>
                            </div>
                            <div className="category-table-content">
                                <ul>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="button-toggle button-toggle-ee" onClick={() => {showMoreLess('ee')}}>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </div>
                        </div>
                        <div id="category-table-it" className="category-table category-table-it hide-table">
                            <div className="category-name">
                                <span>Information Technology</span>
                            </div>
                            <div className="category-table-content">
                                <ul>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="button-toggle button-toggle-it" onClick={() => {showMoreLess('it')}}>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </div>
                        </div>
                        <div id="category-table-me" className="category-table category-table-me hide-table">
                            <div className="category-name">
                                <span>Mechanical</span>
                            </div>
                            <div className="category-table-content">
                                <ul>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                    <li>
                                        <a>Subject1</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button className="button-toggle button-toggle-me" onClick={() => {showMoreLess('me')}}>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCategory
