import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-full">
      <footer>
        <div className="up-section">
          <ul>
            <h1>Company</h1>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul>
            <h1>About</h1>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
          </ul>
          <ul>
            <h1>Contact Us</h1>
            <li>
              <p>+1 123 456 7890</p>
            </li>
            <li>
              <p>House #215, Street 5</p>
            </li>
            <li>
              <p>Washington, DC</p>
            </li>
          </ul>
        </div>
        <div className="down-section">
          <ul>
            <h1>Explore</h1>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Item Detail</a>
            </li>
            <li>
              <a href="#">Collectibles</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          <ul>
            <h1>Support</h1>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Blog</a>
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
          <span className="f-logo">LapTopia</span> © 2025 All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
