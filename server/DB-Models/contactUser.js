const mongoose = require("mongoose");

// Defining the contact schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Creating the Contact model
const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
