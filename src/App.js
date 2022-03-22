import React from 'react'
import "./App.css"
import {About, Header, Home, Facility, Review, Counter, Contact, Post, Footer} from "./components";
import "./css/aos.css";
import "./css/magnific-popup.min.css";
import "./css/bootstrap-grid.min.css";
import "./script/main"
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css/bundle";


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