import React, { useState } from 'react'; 
import './App.css';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading3 } from './LoadingComponents';
import Page from './Page';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

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
        <button id="move-to-top" onClick={ScrollTop} className="move-to-top-hide">
          <i className="fa fa-angle-up"></i>
        </button>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Page/>
        </StateProvider>
        <div className="modal">
          <span id="modal-close" onClick={modalClose}>&times;</span>
          <img alt="modal" className="modal-image" id="modal-image"/>
          <div id="caption"></div>
        </div>
        <div id="snackbar"></div>
      </div>
  );

  if(!isAuthenticated) return <Login/>
}

export default App;
