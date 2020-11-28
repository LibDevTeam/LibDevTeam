import React from 'react'; 
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';



function App() {
  const ScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const modalClose = () => {
    document.querySelector(".modal-image").src= null;
    document.querySelector(".modal").style.display = "none";
    document.body.style.overflow = "auto";
  }

  window.onClick = function(event) {
    console.log(event);
    if(event.target === document.querySelector(".modal")) {
      modalClose();
    }
  }

  return (
    <Router>
      <div className="app">
        <a href="" id="move-to-top" onClick={ScrollTop} className="move-to-top-hide">
          <i className="fa fa-angle-up"></i>
        </a>
        <Header/>
        <Content/>
        <Footer/>
        <div className="modal">
          <span id="modal-close" onClick={modalClose}>&times;</span>
          <img alt="modal-image" className="modal-image" id="modal-image"/>
          <div id="caption"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
