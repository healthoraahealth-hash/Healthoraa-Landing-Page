// contactRoute.js
import express from 'express';
import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     user: "healthoraa.health@gmail.com",
    pass: "pjbjbgncyknvdivq"
  },
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
    
  const mailOptions = {
    from: email,
    to: "healthoraa.health@gmail.com", // where you want to receive messages
    subject: `New message from ${name}`,
    text: `From: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
});

export default router;
