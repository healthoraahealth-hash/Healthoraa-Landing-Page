// contactRoute.js
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Healthoraa <onboarding@resend.dev>", // default verified sender
      to: ["healthoraa.health@gmail.com"],
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
      reply_to: email, // so you can reply directly to user
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
