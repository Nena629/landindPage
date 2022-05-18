import React from 'react'
import "./Counter.css";
import {FaUsers,FaClinicMedical, FaSmile,FaProcedures} from 'react-icons/fa';


const Counter = () => {
  return (

    <section className="counter">
  <div className="container">
    <div className="box-container">
      <div className="box" data-aos="fade-up">
        <FaClinicMedical/>
        <span>1</span>
        <h3>Cabinet</h3>
      </div>
      <div className="box" data-aos="fade-up">
        <FaUsers/>
        <span>3</span>
        <h3>Assitantes médicale</h3>
      </div>
      <div className="box" data-aos="fade-up">
        <FaSmile/>
        <span>100</span>
        <h3>Patients</h3>
      </div>
      <div className="box" data-aos="fade-up">
        <FaProcedures/>
        <span>2</span>
        <h3>Salles de soins</h3>
      </div>
    </div>
  </div>
</section>

  )
}

export default Counter;