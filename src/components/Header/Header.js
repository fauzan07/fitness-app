import React from 'react';
import logo from '../../assets/logo.png'

function Header(props){

    return(
      <>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
        <a className="navbar-brand" href="/"><img src={logo} alt="logo" width="150"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
            <li className="nav-item">
              <a className="nav-link pl-4" activeclassname="selected" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="#about">About Fitness</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="#benefits">Benefits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pl-4" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>
      </>

    );

}

export default Header;
