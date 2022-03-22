import React from "react";
import "./Home.css";
import DoctorsBro from "../../images/Doctors-bro (1).svg";
import DoctorsAmico from "../../images/Doctors-amico.svg";
import DoctorsPana from "../../images/Doctors-pana.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const Home = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <section className="home" id="home">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                <img className="img1" src={DoctorsBro} width="140%" alt="" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <div className="text">
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
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="home" id="home">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                <img className="img1" src={DoctorsAmico} width="125%" alt="" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <div className="text">
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
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="home" id="home">
          <div className="container">
            <div className="row min-vh-100 align-items-center text-center text-md-left">
              <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                <img className="img1" src={DoctorsPana} width="125%" alt="" />
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                <div className="text">
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
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
