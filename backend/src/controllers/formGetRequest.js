import { formModel } from "../models/formModel.js";

const formGetRequest = async (req, res) => {

  try {
    const response=await formModel.find();
    // res.status(200).json({ message: "Form get successfully!" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Server error. Failed to submit form." });
  }
};

export default formGetRequest;
