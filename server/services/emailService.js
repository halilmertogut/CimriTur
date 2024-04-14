const nodemailer = require('nodemailer');
require('dotenv').config(); // .env dosyasından değişkenlere erişmek için

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendVerificationEmail = async (userEmail, verificationCode) => {
    try {
        let info = await transporter.sendMail({
            from: `"Your Name or Company" <${process.env.EMAIL_USERNAME}>`,
            to: userEmail,
            subject: "Please verify your account",
            html: `<p>Your verification code is: <b>${verificationCode}</b></p>`
        });

        console.log("Message sent: %s", info.messageId);
        return true;
    } catch (error) {
        console.error("Error sending email: ", error);
        return false;
    }
};

module.exports = { sendVerificationEmail };
