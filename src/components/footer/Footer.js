import React from 'react'
import "./Footer.css";
import logoHeader from "../../images/Tabibcom logo.png";
import { BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    
<section className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4" data-aos="fade-right">
        <a href="#" className="logo"> 
          <img className="mainlogo" src={logoHeader} width="37%" alt="" /></a>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nemo porro quasi minima consequuntur dolorum, quas amet in autem id?</p>
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
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
        <a href="https://twitter.com/"><BsTwitter/></a>
    
      </div>
    </div>
  </div>
  <h1 className="credit text-center mx-auto"><span>©Tabibcom 2022</span> | all rights reserved.</h1>
</section>

   

  )
}

export default Footer