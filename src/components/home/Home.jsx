import React from "react";
import "./Home.css";
import DoctorsBro from "../../images/Doctors-bro (1).svg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row min-vh-100 align-items-center text-center text-md-left">
          <div className="col-md-6 pr-md-5" data-aos="zoom-in">
            <img src={DoctorsBro} width="110%" alt="" />
          </div>

          <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
            <h1>
              <span>stay</span> safe, <span>stay</span> healthy.
            </h1>
            <h3>caring for you.</h3>
            <a href="#">
              {" "}
              <button className="button">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
