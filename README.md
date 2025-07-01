
# 📘 eBook Landing Page with Razorpay Integration
This project is a full-stack eBook selling platform where users can explore an eBook, proceed to purchase, make payment via Razorpay, and instantly receive the book download link on their email. It is built using modern web technologies with a simple and elegant user experience.

🔧 Features
📖 Clean landing page to showcase eBook and its value

💳 Razorpay payment gateway integration (Test + Live ready)

📬 Automatic email delivery of download link post-payment

🔐 Environment variables for secure credentials

📱 Fully responsive design (mobile + desktop)

📨 Email service using Nodemailer (Gmail SMTP)

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Payment: Razorpay

Email Service: Nodemailer

Deployment: Render (backend), GitHub Pages / Netlify / InfinityFree (frontend)

📂 Project Structure
bash
Copy
Edit
/frontend
  ├── index.html
  ├── ebook.html
  ├── payment.html
  ├── thankyou.html
  └── styles.css

/backend
  ├── server.js
  ├── routes/
  ├── utils/sendMail.js
  └── .env
⚙️ How to Run
Clone the repo & install dependencies:

bash
Copy
Edit
cd backend
npm install
Create .env file:

ini
Copy
Edit
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=yourpassword
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
Start server:

nginx
Copy
Edit
node server.js