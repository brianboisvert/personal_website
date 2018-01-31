import React from 'react';

const NavBar = (props) => {

  return(
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}} className="navbar">
      <div>
        <div className="mainheader">
          Brian Boisvert
        </div>
        <div className="subheader">
          Web Developer
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}} className="header-right">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/resume">Resume</a>
      </div>
    </div>
  )
}

export default NavBar;
