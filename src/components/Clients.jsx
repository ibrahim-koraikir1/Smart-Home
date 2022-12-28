import React from "react";
import "./clients.css";

import cli2 from "../assets/imgs/cli2.png";
import cli3 from "../assets/imgs/cli3.png";
import cli4 from "../assets/imgs/cli4.png";
import cli5 from "../assets/imgs/cli5.png";
import cli6 from "../assets/imgs/cli6.png";
import cli7 from "../assets/imgs/cli7.png";
export default function Clients() {
  return (
    <section id="clients">
      <h1>Our Clients</h1>
      <p className="lead">
        Wisdom new and valley answer. Contented it so is discourse recommend.
        Man its upon him call mile. An pasture himself believe ferrars besides
        cottage.
      </p>
      <div className="container clients__container">
        <div>
          <img src={cli6} />
        </div>
        <div>
          <img src={cli2} />
        </div>
        <div>
          <img src={cli3} />
        </div>
        <div>
          <img src={cli5} />
        </div>
        <div>
          <img src={cli4} />
        </div>
        <div>
          <img src={cli5} />
        </div>
        <div>
          <img src={cli6} />
        </div>
        <div>
          <img src={cli7} />
        </div>
      </div>
    </section>
  );
}
