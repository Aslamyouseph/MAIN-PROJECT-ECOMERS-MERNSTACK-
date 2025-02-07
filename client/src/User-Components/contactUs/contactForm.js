import React, { useState } from "react";
import "./contactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
    setSuccessMessage(
      "Your request has been submitted successfully! Our staff will contact you very soon."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h1
        className="contact-form-heading"
        style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <b>
          Need to reach us for reporting enquiries? No problem. Just fill out
          the form below and we'll make sure your message reaches the right
          person.
        </b>
      </h1>
      <br />

      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="40"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
