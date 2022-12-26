import React from "react";
import "./download.css";
import "./Header.css";

import appp from "../assets/imgs/appp.png";
import and from "../assets/imgs/and.png";
export default function Download() {
  return (
    <section id="downloadApp">
      <div className="container downloadApp__container">
        <div className="downloadApp__content">
          <h1>
            Donwnload
            <br />
            App
          </h1>
          <p>
            Wisdom new and valley answer. Contented it so is discourse
            recommend. Man its upon him call mile. An pasture he himself believe
            ferrars besides cottage.
          </p>
          <div className="cta">
            <a
              href="https://www.apple.com/app-store"
              className="btn btn-primary"
              target="blank"
            >
              <div className="logo">
                <img
                  src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"
                  alt=""
                />
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
                  src="https://download.logo.wine/logo/Google_Play/Google_Play-Icon-Logo.wine.png"
                  alt=""
                />
              </div>
              <span>
                <small>Download on the</small>
                <h4>App Store</h4>
              </span>
            </a>
          </div>
        </div>
        <div className="downloadApp__image">
          <img src={appp} />
        </div>
      </div>
    </section>
  );
}
