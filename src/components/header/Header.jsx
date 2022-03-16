import React from 'react'
import "./Header.css";
import logoHeader from "../../images/Tabibcom logo.png";


const Header = () => {

  return (

  <header>
  <div className="container">
    <a href="#" className="logo"> 
    
      <img className="mainlogo" src= {logoHeader} width="37%" alt='' />
    </a>
    <nav className="nav">
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#facility">facility</a></li>
        <li><a href="#review">review</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#post">post</a></li>
      </ul>
    </nav>
    </div>

    <div className="fas fa-bars" >
  </div>
</header>

  )
}

export default Header;