import React from "react";
import "./Post.css";
import img10 from "../../images/img10.jpg";
import img11 from "../../images/img11.jpg";
import img12 from "../../images/img12.jpg";


const Post = () => {
  return (
    <section className="post" id="post">
      <div className="container min-vh-100">
        <h1 className="heading">
          <span>'</span> Actualités médicales <span>'</span>
        </h1>
        <div className="box-container">
          <div className="box" data-aos="fade-right">
            <img src={img10} alt="" />
            <div className="content">
              <span>jan 5, 2022</span>
              <a href="#">
                <h3>Titre</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
                porro libero at veniam molestias facere quo necessitatibus ipsum
                ad?
              </p>
              <a href="#">
                <button className="button">en savoir plus</button>
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up">
            <img src={img11} alt="" />
            <div className="content">
              <span>jan 5, 2022</span>
              <a href="#">
                <h3>Titre</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
                porro libero at veniam molestias facere quo necessitatibus ipsum
                ad?
              </p>
              <a href="#">
                <button className="button">en savoir plus</button>
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <img src={img12} alt="" />
            <div className="content">
              <span>jan 5, 2022</span>
              <a href="#">
                <h3>Titre</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
                porro libero at veniam molestias facere quo necessitatibus ipsum
                ad?
              </p>
              <a href="#">
                <button className="button">en savoir plus</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
