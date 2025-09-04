import express from "express";
import contactRoutes from "./routes/contact.routes.js";
import cors from 'cors'

const app = express();
app.use(cors({
    origin: ["http://localhost:5173", "https://portfolio-annu-singh-nj6n.onrender.com"],  // frontend ka origin
  credentials: true 
}))
app.use(express.json());

app.use("/contact", contactRoutes)

export default app;