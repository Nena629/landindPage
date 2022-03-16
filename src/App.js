import React from 'react'
import "./App.css"
import {About, Header, Home, Facility, Review, Counter, Contact, Post, Footer} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/aos.css";
import "./css/magnific-popup.min.css";
import "./css/bootstrap-grid.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./fontawesome/css/fontawesome.min.css";


const App = () => {

  AOS.init({
    duration:1000,
    delay:400
});

  return (
    <>
     <Header />
     <Home />
     <About/>
     <Facility/>
     <Review/>
     <Counter/>
     <Contact/>
     <Post/>
     <Footer/>
    </>
  )
}

export default App