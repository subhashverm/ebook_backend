
# 📘 eBook Landing Page with Razorpay Integration
This project is a full-stack eBook selling platform where users can explore an eBook, proceed to purchase, make payment via Razorpay, and instantly receive the book download link on their email. It is built using modern web technologies with a simple and elegant user experience.
# 📘 eBook Backend – Node.js + Razorpay + Email Service

This is the backend for the [eBook Selling Website](https://ebook-backend-dyed.onrender.com) that supports:
- Razorpay payment integration
- User email capturing
- Payment confirmation
- Email delivery of eBook download link

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js
- **Payment Gateway:** Razorpay
- **Email Service:** Nodemailer
- **Frontend:** Connected to [Static Pages Hosted via GitHub Pages](theenhancedguide.rf.gd)
- **Hosting:** Render

---

## 🚀 Features

✅ Razorpay Checkout Integration  
✅ Send eBook link to user email after successful payment  
✅ REST APIs for payment, confirmation & email trigger  
✅ CORS-enabled API for frontend communication  
✅ Error handling & success callback flow

---

## 📁 Folder Structure

ebook_backend/
├── node_modules/
├── routes/
│ └── paymentRoutes.js
├── .env
├── server.js
├── package.json

2️⃣ Install dependencies
npm install
3️⃣ Create .env file
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_password
4️⃣ Start the server
node server.js
Server will start on http://localhost:5000

🧪 API Endpoints
📦 POST /api/payment
Creates Razorpay order with amount and currency

🧾 POST /api/payment/verify
Handles payment verification and email sending logic

📬 Email Sample
After successful payment, user receives:

Thank you for purchasing the eBook!

🔗 Live Demo
🌐 Frontend: theenhancedguide.rf.gd

🔗 Backend: Render Hosted API

👨‍💻 Author
Developed by Subhash Verma
📧 subhash27042004@gmail.com

📜 License
This project is licensed under the MIT License.



