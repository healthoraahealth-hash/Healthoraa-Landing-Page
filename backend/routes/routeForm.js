// contactRoute.js
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Route for sending email
router.post("/", async (req, res) => {
  const { name, number, course, email, age, hometown } = req.body;

  try {
    await resend.emails.send({
      from: "Healthoraa <onboarding@resend.dev>", // safe default
      to: ["healthoraa.health@gmail.com"],
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${number}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Hometown:</b> ${hometown}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});

export default router;
