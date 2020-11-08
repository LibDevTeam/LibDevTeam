import React, { useState, useEffect } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';



function App() {
  const ScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <Router>
      <div className="app">
        <a id="move-to-top" onClick={ScrollTop} className="move-to-top-hide">
          <i className="fa fa-angle-up"></i>
        </a>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
