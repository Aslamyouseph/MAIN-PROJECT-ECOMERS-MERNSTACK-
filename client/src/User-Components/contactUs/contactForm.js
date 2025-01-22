import React from "react";
import "./contactForm.css";
function contactForm() {
  return (
    <div>
      <h1
        className="contact-form-heading"
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <b>
          Need to reach us for reporting enquiries ? No problem. Just fill out
          the form below and we'll make sure your message reaches the right
          person.
        </b>
      </h1>
      <br />
      <div className="form-container">
        <form action="" method="">
          <h2>Contact Us</h2>

          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" cols="40"></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default contactForm;
