import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./contactForm.css";

function ContactForm() {
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear errors on input change
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError(""); // Clear error if validation passes
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Run validation

    try {
      const res = await fetch("http://localhost:5000/api/user/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(
          "Your request has been submitted successfully! Our staff will contact you very soon."
        );
        setFormData({ name: "", email: "", message: "" });

        // Redirect after success
        setTimeout(() => navigate("/"), 3000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit. Please check your internet connection.");
    }
  };

  return (
    <div>
      <h1 className="contact-form-heading" style={{ margin: "0 5%" }}>
        <b>
          Need to reach us for reporting inquiries? No problem. Just fill out
          the form below, and we'll make sure your message reaches the right
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
