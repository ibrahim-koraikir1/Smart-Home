import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container ">
        <div className="footer__1">
          <div className="footer__logo">
            <a href="index.html">
              <h3>smartHome</h3>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsum nobis ratione
          </p>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter Email" required />
            <button type="submit">
              <i className="uil uil-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="footer__2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html#about">About</a>
            </li>
            <li>
              <a href="index.html#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="index.html#faqs">Testimonials</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__3">
          <h4>Primacy</h4>
          <ul className="privacy">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__4">
          <h4>Contact Us</h4>
          <p>
            +01 234 567 8910
            <br />
            koraikir366@gmail.com
          </p>
          <ul className="footer_socials">
            <li>
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <small>Copyright &copy;ibrahim koraikir366</small>
      </div>
    </footer>
  );
}
