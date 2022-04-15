import React from 'react'
import "./App.css"
import "./css/aos.css";
import "./css/bootstrap-grid.min.css";
import "./css/magnific-popup.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/bundle";
import "./script/main";
import "./script/popup";
import {About, Header, Home, Facility, Review, Counter, Contact, Post, Footer} from "./components";


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

export default App;