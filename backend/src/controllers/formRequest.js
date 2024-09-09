
import { formModel } from "../models/formModel.js";

const formRequest = async (req, res) => {
  const { name, email, mobileNumber, userType, comment } = req.body;

  try {
    const newForm = new formModel({
      name,
      email,
      mobileNumber,
      userType,
      comment,
    });
    await newForm.save();
    res.status(200).json({ message: "Form submitted and saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Failed to submit form." });
  }
};

export default formRequest;
