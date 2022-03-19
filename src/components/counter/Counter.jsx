import React from 'react'
import "./Counter.css";
import { FaHospital,FaUsers, FaSmile,FaProcedures} from 'react-icons/fa';




const Counter = () => {
  return (

    <section className="counter">
  <div className="container">
    <div className="box-container">
      <div className="box" data-aos="fade-up">
        <FaHospital/>
        <span>120+</span>
        <h3>Hospitals</h3>
      </div>
      <div className="box" data-aos="fade-up">
        <FaUsers/>
        <span>100+</span>
        <h3>staff</h3>
      </div>
      <div className="box" data-aos="fade-up">
        <FaSmile/>
        <span>1200+</span>
        <h3>happy patients</h3>
      </div>
      <div className="box" data-aos="fade-up">
        <FaProcedures/>
        <span>130+</span>
        <h3>bed facility</h3>
      </div>
    </div>
  </div>
</section>

  )
}

export default Counter;