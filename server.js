const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://theenhancedguide.rf.gd/" // ✅ yahan tumhara actual frontend domain likho
}));

// Static frontend serving
app.use(express.static(path.join(__dirname, "../public")));

// Razorpay order route
app.post("/create-order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 199 * 100, // ₹199 in paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error("Razorpay Error:", err);
    res.status(500).send("Payment Error");
  }
});

// Email route
const emailRoute = require("./routes/email");
app.use("/", emailRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
