import React from 'react';
import "./Facility.css";
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img6 from "../../images/img6.jpg"
import img7 from "../../images/img7.jpg"
import img8 from "../../images/img8.jpg"
import img9 from "../../images/img9.jpg"


const Facility = () => {

  return (

    <section className="facility" id='facility' >

  <div className="container">

    <h1 className="heading">

      <span>'</span> Nos Services <span>'</span></h1>

    <div className="box-container">
      <div className="box" data-aos="zoom-in">
        <a href={img1} title="our team">
          <img src={img1} alt="" />
        </a>

      </div>
      <div className="box" data-aos="zoom-in">
        <a href={img2} title="our lab">
          <img src={img2} alt="" />
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href={img3} title="emergency rooms">
          <img src= {img3}  alt=""/>
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href= {img4} title="expert doctors">
          <img src= {img4} alt="" />
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href= {img5} title="expert doctors">
          <img src= {img5}  alt="" />
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href= {img6} title="emergency rooms">
          <img src= {img6}  alt="" />
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href={img7} title="expert doctors">
          <img src={img7}  alt="" />
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href={img8}  title="emergency rooms">
          <img src={img8}  alt="" />
        </a>
      </div>
      <div className="box" data-aos="zoom-in">
        <a href={img9}  title="enough beds">
          <img src={img9}  alt="" />
        </a>
      </div>
    </div>
  </div>
</section>

  );





};

export default Facility;
