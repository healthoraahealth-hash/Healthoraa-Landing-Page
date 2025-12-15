// contactRoute.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     user: process.env.EMAIL_USER,
    // pass: 'duoaifvnkoolivoq'
    pass: process.env.EMAIL_PASS
  },
});

// Route for sending email
router.post('/', async (req, res) => {
  const { name, number, email, age, hometown } = req.body;
    
  const mailOptions = {
    from: email,
    to: 'healthoraa.health@gmail.com', // where you want to receive messages
    subject: `New message from ${name}`,
    text: `User details of ${email}: \n\n${number}\n${name}\n${age}\n${hometown}`,
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
