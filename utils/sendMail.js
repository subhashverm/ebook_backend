const nodemailer = require("nodemailer");

const sendMail = async (toEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "The enhanced guide <no-reply@geniusgoods.in>",
      to: toEmail,
      subject: "Your eBook Download Link",
      html: `
        <h1>🎉The Enhancedguide (info@theenhanedguide.shop) has
invited you to view the following shared folder:</h1>
        <h2>📚 Your eBook and Guides are Ready! </h2 >
        <br>
<p>Dear Reader,</p>
<br>
        <p>Thank you for your purchase!
You can view your eBook and guides by accessing the shared folder below.
Please make sure to use the same email address this message was sent to when opening the link. </p>
        <p>Here is your download link:</p>
        <a href="https://drive.google.com/drive/folders/1a9524WhXaB_Ez4nMPnLxC0GYRM7tLHpJ" target="_blank">📥 Click to Download</a>
        <br><br>
        <p>Stay Enhanced!<p>
        <br>
Team The Enhanced Guide.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Mailer Error:", error);
    return false;
  }
};

module.exports = sendMail;


