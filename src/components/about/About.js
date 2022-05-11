import React from 'react'
import "./About.css";
import about from "../../images/about-img.png";
import { FaAmbulance, FaProcedures, FaStethoscope} from 'react-icons/fa';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row min-vh-1 align-items-center">
                    <div className="col-md-6 content" data-aos="fade-right">
                        <div className="box">
                       
                     <h3> <FaAmbulance className='amb'/> 
                     Service d'ambulance </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
                        </div>
                        <div className="box">
                            <h3> <FaProcedures className='room'/>   
                            Salles d'urgence </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, suscipit.</p>
                        </div>
                        <div className="box">
                            <h3> <FaStethoscope className='check'/> 
                            consultation gratuite </h3>
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