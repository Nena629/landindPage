import React from 'react'
import "./About.css";
import about from "../../images/about-img.png";


const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-md-6 content" data-aos="fade-right">
                        <div className="box">
                            <h3> <i className="fas fa-ambulance"> </i> ambulance services </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
                        </div>
                        <div className="box">
                            <h3> <i className="fas fa-procedures" > </i>  emergency rooms </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
                        </div>
                        <div className="box">
                            <h3> <i className="fas fa-stethoscope" > </i>  free check-ups </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block" data-aos="fade-left">
                        <img src={about} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About