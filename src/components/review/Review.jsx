import React from 'react';
import "./Review.css";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";

const Review = () => {
  return (
    
<section className="review" id="review">
  <div className="container">
    <h1 className="heading"><span>'</span> people's review <span>'</span></h1>
    <div className="box-container">
      <div className="box" data-aos="fade-right">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
        <h3>someone's name</h3>
        <span>jan 5, 2021</span>
        <img src={pic1} alt="" />
      </div>
      <div className="box" data-aos="fade-up">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
        <h3>someone's name</h3>
        <span>jan 7, 2021</span>
        <img src={pic2} alt="" />
      </div>
      <div className="box" data-aos="fade-left">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
        <h3>someone's name</h3>
        <span>jan 10, 2021</span>
        <img src={pic3} alt="" />
      </div>
    </div>
  </div>
</section>

  )
}

export default Review