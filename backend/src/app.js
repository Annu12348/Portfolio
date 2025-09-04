import express from "express";
import contactRoutes from "./routes/contact.routes.js";
import cors from 'cors'

const app = express();
app.use(cors({
    origin: "http://localhost:5173",  // frontend ka origin
  credentials: true 
}))
app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.use("/contact", contactRoutes)

export default app;