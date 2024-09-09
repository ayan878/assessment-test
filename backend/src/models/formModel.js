import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  userType: { type: String, required: true, enum: ["captain", "customer"] },
  comment: { type: String, required: true },
});

export const formModel=mongoose.model('form',formSchema);