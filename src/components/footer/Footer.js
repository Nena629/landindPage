import React from 'react'
import "./Footer.css";
import logoHeader from "../../images/Tabibcom logo.png";
import {BsFacebook, BsInstagram, BsTwitter,BsLinkedin} from 'react-icons/bs';



const Footer = () => {
  return (
    
<section className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4" data-aos="fade-up">
        <a href="#logo" className="logo"> 
          <img className="mainlogo" src={logoHeader} width="50%" alt="" /></a>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing lit. Tenetur nemo porro quasi minima consequuntur dolorum, quas amet in autem id</p>
      </div>
      <div className="col-md-4 text-center" data-aos="fade-up">
        <h3>Navigation rapide</h3>
        <a href="/">accueil</a>
        <a href="#about">a propos</a>
        <a href="#facility">services</a>
        <a href="#review">avis</a>
        <a href="#contact">contact</a>
        <a href="#post">actualités</a>
      </div>
      <div className="col-md-4 text-center" data-aos="fade-left">
        <h3>réseaux sociaux</h3>
        <div className='res'>
        <a href="https://www.facebook.com/"><BsFacebook className='fb'/></a>
        <a href="https://www.instagram.com/"><BsInstagram className='in'/></a>
        <a href="https://twitter.com/"><BsTwitter className='tw'/></a>
        <a href="https://www.linkedin.com/"><BsLinkedin className='ln'/></a>
    
        </div>
      </div>
    </div>
  </div>
  <h1 className="credit text-center mx-auto"><span>©Tabibcom 2022</span> | all rights reserved.</h1>
</section>

   
  )
}

export default Footer