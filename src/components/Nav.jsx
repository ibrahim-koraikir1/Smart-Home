import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <ul className={open ? "nav__items open" : "nav__items"}>
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
        <a href="index.html" className="nav__logo">
          <h3>smart home</h3>
        </a>

        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#" className="btn">
            Signup{" "}
          </a>
        </div>
        <button id="men-btn" onClick={() => setOpen((prv) => !prv)}>
          {open ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
}
