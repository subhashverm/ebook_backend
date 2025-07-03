
const express = require("express");
const router = express.Router();
const sendMail = require("../utils/sendMail");

router.post("/send-email", async (req, res) => {
  console.log("REQ BODY:", req.body);  // ← ye add karo
const { email } = req.body;


  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const success = await sendMail(email);
  if (success) {
    res.send("Email sent successfully!");
  } else {
    res.status(500).send("Failed to send email.");
  }
});

module.exports = router;

