import React, { useEffect, useState } from 'react';
import './AllCategory.css';
import { Loading2 } from './LoadingComponents';

function AllCategory() {
    const [depts,setDepts] = useState([])
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const url = '/api/v1/dept-subjects';
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setDepts(data);
            setLoading(false);
        })
    }, [])

    const showMoreLess = (value) => {
        document.querySelector(`#category-table-${value}`).classList.toggle("hide-table");
        if(document.querySelector(`.button-toggle-${value}`).querySelector(".fa").className === "fa fa-angle-down") {
            document.querySelector(`.button-toggle-${value}`).querySelector(".fa").className = "fa fa-angle-up";
        }
        else {
            document.querySelector(`.button-toggle-${value}`).querySelector(".fa").className = "fa fa-angle-down";
        }
    }

    if(loading) return <Loading2/>

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="category-box">
                        <ul>
                            {
                                depts.map((dept) => (
                                    <li>
                                        <a href={`#category-table-${dept.deptCode}`}>
                                            <span>{dept.deptName}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="category-tab">
                        {
                            depts.map((dept) => (
                                <div id={`category-table-${dept.deptCode}`} className={`category-table category-table-${dept.deptCode} hide-table`}>
                                    <div className="category-name">
                                        <span>{dept.deptName}</span>
                                    </div>
                                    <div className="category-table-content">
                                        <ul>
                                            {
                                                dept.subjects.map((subject) => (
                                                    <li>
                                                        <a href={`/subject/${subject.identity.low}`}>{subject.properties.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <button className={`button-toggle button-toggle-${dept.deptCode}`} onClick={() => {showMoreLess(dept.deptCode)}}>
                                            <i className="fa fa-angle-down"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCategory
