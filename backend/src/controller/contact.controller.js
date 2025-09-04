import contactModel from "../models/contact.models.js";
import debug from "debug";
const debuglog = debug("development:controller");

export const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "name, email and message are required",
      });
    }

    const contact = await contactModel.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    debuglog(error);
    return res.status(500).json({
      message: "Internal server error, please try again later",
    });
  }
};
