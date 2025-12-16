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
  console.log("CONTACT API HIT");
  console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      from: "Healthoraa <onboarding@resend.dev>",
      to: ["healthoraa.health@gmail.com"],
      subject: "TEST EMAIL",
      html: "<p>If you received this, Resend works</p>",
    });

    console.log("RESEND RESULT:", result);

    res.json({ success: true });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ success: false });
  }
});


export default router;
