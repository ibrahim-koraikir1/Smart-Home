import React from "react";
import hero from "../assets/imgs/Hero1.png";
import Decorator from "../assets/imgs/Decorator.jpg";
import Scrollarrow from "../assets/imgs/Scrollarrow.jpg";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./header.css";
export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h1 className="header__title">
          Smart Home
          <br />
          Application
        </h1>
        <p className="lead">
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>
        <div className="header_image">
          <img src={hero} />
        </div>
        <div className="cta">
          <a
            href="https://www.apple.com/app-store"
            className="btn btn-primary"
            target="blank"
          >
            <div className="logo">
              <img src={"../assets/imgs/Vector.jpg"} alt="" />
            </div>
            <span>
              <small>Download on the</small>
              <h4>App Store</h4>
            </span>
          </a>
          <a
            href="https://www.apple.com/app-store"
            className="btn btn-primary"
            target="blank"
          >
            <div className="logo">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <span>
              <small>Download on the</small>
              <h4>App Store</h4>
            </span>
          </a>
        </div>
        <div className="header_socials">
          <a>
            <BsFacebook />
          </a>
        </div>
      </div>
      <div className="header_decorator-1">
        <img src={Scrollarrow} />
      </div>
      <div className="header_decorator-2">
        <img src={Decorator} />
      </div>
    </header>
  );
}
