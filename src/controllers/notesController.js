// src/controllers/notesController.js

export const getNotes = (req, res) => {
    res.json({ message: "All notes" });
};

export const createNote = (req, res) => {
    res.json({ message: "Note created" });
};