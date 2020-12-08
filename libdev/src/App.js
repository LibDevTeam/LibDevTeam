import React from 'react'; 
import './App.css';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading3 } from './LoadingComponents';
import { GlobalProvider } from './GlobalState';
import Page from './Page';



function App() {
  const  { isLoading, isAuthenticated } = useAuth0();

  const ScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const modalClose = () => {
    document.querySelector(".modal-image").src= null;
    document.querySelector(".modal").style.display = "none";
    document.body.style.overflow = "auto";
  }

  window.onClick = function(event) {
    if(event.target === document.querySelector(".modal")) {
      modalClose();
    }
  }

  if(isAuthenticated || isLoading) return (
      <div className="app">
        {isLoading && <Loading3/>}
        <a href="" id="move-to-top" onClick={ScrollTop} className="move-to-top-hide">
          <i className="fa fa-angle-up"></i>
        </a>
        <GlobalProvider>
          <Page/>
        </GlobalProvider>
        <div className="modal">
          <span id="modal-close" onClick={modalClose}>&times;</span>
          <img alt="modal" className="modal-image" id="modal-image"/>
          <div id="caption"></div>
        </div>
      </div>
  );

  if(!isAuthenticated) return <Login/>
}

export default App;
