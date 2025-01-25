import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-full">
      <footer>
        <div className="up-section">
          <ul>
            <h1>Quick Links</h1>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">How To</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <h1>Services</h1>
            <li>
              <a href="#">Latest News</a>
            </li>
            <li>
              <a href="#">Return & Refunds policies</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Payment Methods</a>
            </li>
          </ul>
          <ul>
            <h1>Contact Us</h1>
            <li>
              <p>Lappora 114 Fifth Avenue</p>
            </li>
            <li>
              <p>H.NO. B-23 F/F BLOCK-B</p>
            </li>
            <li>
              <p>SECTOR-12 , 5th Floor </p>
            </li>
            <li>
              <p>Techno Park kerala india</p>
            </li>
          </ul>
        </div>
        <div className="down-section">
          <ul>
            <h1>Explore</h1>
            <li>
              <a href="#">Gaming Laptops</a>
            </li>
            <li>
              <a href="#">Business Laptops</a>
            </li>
            <li>
              <a href="#">Budget Laptops</a>
            </li>
            <li>
              <a href="#">Student Laptops</a>
            </li>
            <li>
              <a href="#">Who need tablets</a>
            </li>
            <li>
              <a href="#">2 in one</a>
            </li>
          </ul>
          <ul>
            <h1>Brands</h1>
            <li>
              <a href="#">HP</a>
            </li>
            <li>
              <a href="#">Dell</a>
            </li>
            <li>
              <a href="#">Acer</a>
            </li>
            <li>
              <a href="#">Lenovo</a>
            </li>{" "}
            <li>
              <a href="#">Asus</a>
            </li>{" "}
            <li>
              <a href="#">Apple</a>
            </li>
          </ul>
          <div className="social">
            <h1>Social</h1>
            <div className="social-icons">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/?lang=en-in&mx=2">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/?hl=en">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">
          <span className="f-logo">Lappora</span> © 2025 All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
