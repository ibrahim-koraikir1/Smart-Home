import React from 'react' 
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
import nav from './nav.css'

export default function Nav() {
  return (
    <nav>
 <div class="container nav_container">

   <ul class="nav_items">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="contact.html">Contact</a></li>
      </ul>
   <a href="index.html" class="nav_logo"><h3>smart home</h3></a>

     <div class="nav_signin-signup">
        <a href="#">Login</a>
        <a href="#" class="btn">Signup </a>
     </div>
    <button class="men-btn" ><RxHamburgerMenu/></button>
     <button class="men-btn" ><IoMdClose/></button>
  </div>
 </nav>
  )
}
