import express from "express";
const router = express.Router();

import { getNotes, createNote } from "../controllers/notesController.js";

router.get("/", getNotes);
router.post("/", createNote);

export default router;