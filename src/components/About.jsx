import React from "react";
import "./about.css";
import about1 from "../assets/imgs/about1.png";
import about2 from "../assets/imgs/about2.png";
import about3 from "../assets/imgs/about3.png";
export default function About() {
  return (
    <section id="about">
      <h1 className="about__title">About Us</h1>
      <div className="container">
        <article className="about__article">
          <div className="about__image">
            <img src={about1} />
          </div>
          <div className="about content">
            <h2 className="about__article-title">Smart Home's Smart Services</h2>
            <p>
              Wisdom new and valley answer. Contented it so is disco se
              recommend. Man its upon him call mile. An pasture he himself
              believe ferrars besides cottage.
            </p>
            <a href="#" class="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>

        <article className="about__article">
          <div className="about content">
            <h2 className="about__article-title">Smart Home's Smart Services</h2>
            <p>
              Wisdom new and valley answer. Contented it so is disco se
              recommend. Man its upon him call mile. An pasture he himself
              believe ferrars besides cottage.
            </p>
            <a href="#" class="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="about__image">
            <img src={about2} />
          </div>
        </article>

        <article className="about__article">
          <div className="about__image">
            <img src={about3} />
          </div>
          <div className="about content">
            <h2 className="about__article-title">Smart Home's Smart Services</h2>
            <p>
              Wisdom new and valley answer. Contented it so is disco se
              recommend. Man its upon him call mile. An pasture he himself
              believe ferrars besides cottage.
            </p>
            <a href="#" class="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
