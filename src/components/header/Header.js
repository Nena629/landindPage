import React from 'react'
import "./Header.css";
import logoHeader from "../../images/Tabibcom logo.png";


const Header = () => {


  return (

  <header>
    
  <div className="container">
    <a href="/" className="logo"> 
    
      <img className="mainlogo" src= {logoHeader} width="40%" alt='' />
    </a>
    <nav className="nav">
      <ul className='comp'>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">A Propos</a></li>
        <li><a href="#facility">Services</a></li>
        <li><a href="#review">Avis</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#post">Actualités</a></li>
        <li className="connect"><a href="#home">Se Connecter</a></li>
      </ul>
    </nav>
    </div>

    <div className="fas fa-bars">
  </div>

</header>

  )
}

export default Header;