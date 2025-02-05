import React, { useState } from "react";
import "./PlaceOrder.css";

function PlaceOrder({ user, totalAmount }) {
  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    mobile: "",
    place: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="order-container">
      <h2 className="order-header">Checkout</h2>
      <form id="order-form" className="order-form" onSubmit={handleSubmit}>
        <div className="order-row">
          {/* Delivery Details */}
          <div className="order-column">
            <div className="shipping-card">
              <h4 className="card-title">Delivery Details</h4>
              <input type="hidden" name="userId" value={user?._id} />
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-input"
                  id="address"
                  rows="3"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  className="form-input"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter your pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  className="form-input"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="place">Place</label>
                <input
                  type="text"
                  className="form-input"
                  id="place"
                  name="place"
                  placeholder="Enter your place"
                  value={formData.place}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="order-column">
            <div className="billing-card">
              <h4 className="card-title">Payment Details</h4>
              <br />
              <div className="form-group">
                <label>
                  <b>
                    <u>Total Amount: {totalAmount} RS:-1000</u>
                  </b>
                </label>
              </div>
              <div className="form-group">
                <label>Payment Method</label>

                <div className="radio-group">
                  <input
                    className="radio-input"
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  <label htmlFor="cod">Cash on Delivery (COD)</label>
                </div>
                <div className="radio-group">
                  <input
                    className="radio-input"
                    type="radio"
                    name="paymentMethod"
                    id="online"
                    value="online"
                    checked={formData.paymentMethod === "online"}
                    onChange={handleChange}
                  />
                  <label htmlFor="online">Online Payment</label>
                </div>
              </div>
              <button className="order-button" type="submit">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
