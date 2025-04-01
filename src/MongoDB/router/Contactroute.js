const express = require("express");
const router = express.Router();
const Contact = require("../Model/Contact");


// POST route for contact form
router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).send("Please fill all fields correctly.");
  }

  // Saving to MongoDB
  try {
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
  } catch (error) {
    console.error("Error saving message:", error.toString());
    return res.status(500).send("Message saving failed. Please try again.");
  }

 
});

module.exports = router;
