import express from "express";
import cors from "cors";
import formSubmission from "./routes/routeForm.js";
import contactSubmission from './routes/routeContact.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/formSubmission', formSubmission);
app.use('/api/contactSubmission', contactSubmission);

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
