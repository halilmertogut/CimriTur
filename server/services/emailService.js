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

const sendVerificationEmail = async (userEmail, verificationCode, firstName, lastName) => {
    const emailHTML = `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    max-width: 600px;
                    margin: 40px auto;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #444444;
                }
                p {
                    font-size: 16px;
                }
                .code {
                    font-weight: bold;
                    color: #007BFF;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hesap Doğrulama</h1>
                <p>Merhaba, ${firstName} ${lastName}</p>
                <p>Hesabınızı aktive etmek için aşağıdaki doğrulama kodunu kullanabilirsiniz:</p>
                <p class="code">${verificationCode}</p>
                <p>Eğer bu isteği siz yapmadıysanız, lütfen bu e-postayı dikkate almayınız.</p>
            </div>
        </body>
        </html>
    `;

    try {
        let info = await transporter.sendMail({
            from: `"CimriTur" <${process.env.EMAIL_USERNAME}>`,
            to: userEmail,
            subject: "Doğrulama Kodunuzu Girerek Hesabınızı Oluşturabilirsiniz",
            html: emailHTML
        });

        console.log("Message sent: %s", info.messageId);
        return true;
    } catch (error) {
        console.error("Error sending email: ", error);
        return false;
    }
};


module.exports = { sendVerificationEmail };
