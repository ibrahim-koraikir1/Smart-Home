import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="container nav_container">
        <ul className="nav_items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <a href="index.html" className="nav_logo">
          <h3>smart home</h3>
        </a>

        <div className="nav_signin-signup">
          <a href="#">Login</a>
          <a href="#" className="btn">
            Signup{" "}
          </a>
        </div>
        <button className="men-btn">
          <RxHamburgerMenu />
        </button>
        <button className="men-btn">
          <IoMdClose />
        </button>
      </div>
    </nav>
  );
}
