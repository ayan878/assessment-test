import express from "express";
import formRequest from "./src/controllers/formRequest.js";
import formGetRequest from "./src/controllers/formGetRequest.js";

const router = express.Router();

router.post("/form", formRequest);
router.get("/form", formGetRequest);

export default router;
