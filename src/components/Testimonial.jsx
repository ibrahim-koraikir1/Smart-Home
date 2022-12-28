import React from "react";
import image1 from "../assets/imgs/image1.png";
import image2 from "../assets/imgs/image2.png";
import image3 from "../assets/imgs/image3.png";
import image4 from "../assets/imgs/image4.png";
import "./testimonial.css";
export default function Testimonial() {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <p className="lead">
        Wisdom new and valley answer. Contented it so is discourse recommend.
        Man its upon him call mile. An pasture he himself believe ferrars
        besides cottage.
      </p>
      <div className="container testimonials__container">
        <article className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio, dignissimos, minima non nobis beatae deserunt assumenda
            natus quis accusamus quas doloribus. Molestiae, at placeat."
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={image1} />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Diana Ayi</b>
              </p>
              <small>Musician</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio, dignissimos, minima non nobis beatae deserunt assumenda
            natus quis accusamus quas doloribus. Molestiae, at placeat."
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={image2} />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Diana Ayi</b>
              </p>
              <small>Musician</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio, dignissimos, minima non nobis beatae deserunt assumenda
            natus quis accusamus quas doloribus. Molestiae, at placeat."
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={image3} />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Diana Ayi</b>
              </p>
              <small>Musician</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            distinctio, dignissimos, minima non nobis beatae deserunt assumenda
            natus quis accusamus quas doloribus. Molestiae, at placeat."
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={image4} />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Diana Ayi</b>
              </p>
              <small>Musician</small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
