const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers");

// TODO:checking the user is logged or not . if the user is logged then it sent the true message otherwise  sent false
router.get("/checksection", (req, res) => {
  if (req.session.user) {
    return res.status(200).json({ isLoggedIn: true, user: req.session.user });
  } else {
    return res.status(200).json({ isLoggedIn: false });
  }
});

// Signup operation
router.post("/signup", async (req, res) => {
  try {
    const response = await userHelpers.doSignup(req.body);

    req.session.user = {
      id: response.user._id,
      name: response.user.name,
      email: response.user.email,
      phone: response.user.phone,
      password: response.user.password,
    };
    req.session.userLoggedIn = true;

    // Save the session data before responding
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error saving session",
        });
      }
      // console.log("Session after signup:", req.session);

      res.status(200).json({
        success: true,
        message: "Signup successful",
        user: response.user,
      });
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Signup failed!",
      error: error.message,
    });
  }
});

// login operation
router.post("/login", (req, res) => {
  userHelpers.dologin(req.body).then((response) => {
    // console.log("Session before login:", req.session); // Log the session after setting user data
    // console.log("Login Response:", response); // Log the response
    if (response.status == true) {
      req.session.user = {
        id: response.user._id,
        name: response.user.name,
        email: response.user.email,
        phone: response.user.phone,
        password: response.user.password,
      };
      req.session.userLoggedIn = true;
      // let user = req.session.user;
      // console.log("user details from the session after login:", user);
      // console.log("Session after login:", req.session);
      // Respond back with success
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: response.user, // Send user data back
      });
    } else {
      req.session.userLoginErr = true;
      res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
  });
});

// logout operation
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to log out" });
    }
    res.clearCookie("connect.sid", { path: "/" }); // Ensure the cookie is cleared

    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  });
});

// contact form operation

router.post("/contact", async (req, res) => {
  try {
    // console.log("Contact request came here");
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const response = await userHelpers.doContact(req.body);
    // console.log("Contact response:", response);
    res.status(200).json({
      success: true,
      message:
        "Your request has been submitted successfully! Our staff will contact you very soon.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      success: false,
      message: "Contact failed!",
      error: error.message,
    });
  }
});

module.exports = router;
