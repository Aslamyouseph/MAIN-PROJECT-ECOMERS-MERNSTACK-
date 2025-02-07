import { useState } from "react";
import "./Return_Refund.css";

const Return_Refund = () => {
  const [formData, setFormData] = useState({
    orderId: "",
    reason: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.orderId || !formData.reason || !formData.phone) {
      setError("All fields are required.");
      return;
    }
    setSuccessMessage(
      "Your return request has been submitted successfully! Our staff will contact you very soon."
    );
    setFormData({ orderId: "", reason: "", phone: "" });
  };

  return (
    <div className="return-refund-container">
      <div className="return-refund-card">
        <h2 className="return-refund-title">
          Not Happy with Your Order? Let’s Fix That!
        </h2>
        <br />
        {error && <p className="return-refund-error">{error}</p>}
        {successMessage && (
          <p className="return-refund-success">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="return-refund-form">
          <div className="return-refund-field">
            <label>Order ID:</label>
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              placeholder="Enter Order ID"
              required
            />
          </div>

          <div className="return-refund-field">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone" // Fixed: Changed "Phone" to "phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
              required
            />
          </div>

          <div className="return-refund-field">
            <label>Reason for Return:</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Describe the issue"
              required
            />
          </div>

          <button type="submit" className="return-refund-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Return_Refund;
