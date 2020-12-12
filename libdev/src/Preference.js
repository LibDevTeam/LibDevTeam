import React, { useState, useEffect } from 'react';
import Loading1 from './LoadingComponents';
import './Preference.css';
import { useStateValue } from './StateProvider';
import { addToPreference, removeFromPreference } from './util';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

function Preference() {
    const [{user_data}, dispatch] = useStateValue();
    const [subjects,setSubjects] = useState(null);
    const [selectSubject,setSelectSubject] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/api/v1/get/allsubjects')
            .then(res => res.json())
            .then(apiData => {
                setSubjects(apiData);
                setLoading(false);
            });
        }
        fetchData();
    },[])

    const handleSubmit = () => {
        var x = document.querySelector("input#combo-box-demo");
        if(selectSubject && x.value === selectSubject.properties.name) addToPreference(user_data[0].properties.email, selectSubject, dispatch);
        document.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click();
    }

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar">
                    <div className="subject-header">
                        <div className="subject-heading">
                            <h1>Preferences</h1>
                        </div>
                    </div>
                    
                        {
                            !loading && 
                            <div className="add_to_preference" style={{display: 'flex'}}>
                            <Autocomplete
                                onChange={(event, value) => setSelectSubject(value)}
                                id="combo-box-demo"
                                options={subjects}
                                getOptionLabel={(option) => option.properties.name}
                                style={{ width: 300 }}
                                debug
                                renderInput={(params) => <TextField {...params} label="Add your subject" variant="outlined" />}
                            />
                            <button type="button" onClick={(e) => {e.preventDefault(); handleSubmit()}}><LibraryAddIcon/></button>
                            </div>
                        }
                </div>
                <div className="book-list-items preferences">
                    <div className="subject-1stLine">
                        <h1 className="category-name">
                            Preferred Subjects {user_data[1]?`(${user_data[1].length})`:''}
                        </h1>
                    </div>
                    <div className="clear-border"></div>
                    <ul className="book-content">
                        { !user_data[1] && <Loading1/> }
                        { user_data[1] && user_data[1].length === 0 && <div style={{color: "#dd1c1c"}}>No subjects found</div>}
                        {
                            user_data[1] && user_data[1].length !== 0 &&
                            user_data[1].map(subject => 
                                <li className="listli">
                                    <div className="trendingProduct">
                                        <a className="product-card" href={`/subject/${subject.identity.low}`}>
                                            <div className='product-img'>
                                                <img
                                                    loading="lazy"
                                                    alt="book-cover"
                                                    className="wooble"
                                                    src={subject.properties.img}
                                                    onError={(e)=>{e.target.onerror = null; e.target.src="https://libyard.in/wp-content/uploads/woocommerce-placeholder-320x320.png"}}
                                                />
                                                <div className="subject-remove">
                                                    <div onClick={(e) => {e.preventDefault(); removeFromPreference(user_data[0].properties.email, subject, dispatch)}}>
                                                        <i className="fa fa-trash"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="stats-container">
                                                <div className="product-name">{subject.properties.name}</div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Preference
