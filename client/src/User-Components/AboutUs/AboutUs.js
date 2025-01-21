import React from "react";
import image1 from "../User-images/about1.webp";
import image2 from "../User-images/about3.webp";
import image3 from "../User-images/about2.webp";
import "./Aboutus.css";

function About() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "50px",
          marginTop: "25px",
        }}
      >
        <b>About</b>
      </h1>
      <h5 style={{ textAlign: "center" }}>
        Who we are, what we do, and how we test products
      </h5>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      <div className="main-card-container">
        <div className="sub-card" style={{ width: "30rem" }}>
          <a href="#section-1">
            <img className="card-img-top" src={image2} alt="About image" />
          </a>
          <h3 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What We're All About: The Lappora Editorial Mission</b>
          </h3>
        </div>

        <div className="sub-card" style={{ width: "30rem" }}>
          <a href="#section-2">
            <img className="card-img-top" src={image3} alt="About image" />
          </a>
          <h3 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What Are The Mission and Vision OF Lappora</b>
          </h3>
        </div>

        <div className="sub-card" style={{ width: "30rem" }}>
          <a href="#section-3">
            <img className="card-img-top" src={image1} alt="About image" />
          </a>
          <h3 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>Who We Are: Meet The Editorial Team Of Us</b>
          </h3>
        </div>
      </div>

      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      {/* Section 1 */}
      <div id="section-1" className="section-1">
        <div className="section">
          <h1 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What We're All About: The Lappora Editorial Mission</b>
          </h1>
          <br />
          <p className="paragraph">
            At Lappora, our mission is to provide comprehensive, unbiased, and
            up-to-date information on laptops. We offer expert reviews, detailed
            comparisons, and tailored buying guides to help you make informed
            decisions. Our editorial team tests the latest models across various
            brands, covering everything from performance to design. Committed to
            integrity and transparency, Lappora is your trusted resource for all
            things laptops, ensuring you find the perfect device to meet your
            needs.
          </p>
        </div>
      </div>

      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      {/* Section 2 */}
      <div id="section-2" className="section-2">
        <div className="section">
          <h1 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What Are The Mission and Vision OF Lappora</b>
          </h1>
          <br />
          <h2 style={{ fontFamily: "initial", marginLeft: "10%" }}>
            <u>Mission</u>
          </h2>
          <p className="paragraph">
            Lappora's mission is to empower consumers by providing
            comprehensive, unbiased, and up-to-date information on laptops. We
            offer expert reviews, detailed comparisons, and tailored buying
            guides to help users make informed decisions.
          </p>

          <h2 style={{ fontFamily: "initial", marginLeft: "10%" }}>
            <u>Vision</u>
          </h2>
          <p className="paragraph">
            Our vision is to become the leading authority in the laptop
            industry, recognized for our expertise, integrity, and commitment to
            quality.
          </p>
        </div>
      </div>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      {/* Section 3 */}
      <div id="section-3" className="section-3">
        <div className="section">
          <h1 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>Who We Are: Meet The Editorial Team</b>
          </h1>
          <p className="paragraph">
            <u>REVIEWS & TECHNOLOGY BUYING ADVICE</u>
            <br />
            . PC Labs Director/Executive Editor: John Burek
            <br />
            . Executive Editor: Alex Colon
            <br />
            . Managing Editors: Tom Brant, Osborne
            <br />
            . Lead Analyst: Brian Westover
            <br />
            . Senior Analysts: Matthew Buzzi, Tony Hoffman
            <br />
            . Analysts: Zackery Cuevas, Michael Sexton
            <br />. Junior Analyst/Associate Producer: Francisco La Hoz
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
