const express = require("express");
const router = express.Router();
const {
  addnotes,
  deleteNotes,
  updatenotes,
  getAll,
  updateNotepin
} = require("../controllers/notes-controller.js");

const authMiddleware = require("../Utils/authMiddleware.js"); // Use require instead of import

// Protect Routes with Authentication Middleware
router.post('/addnotes', authMiddleware, addnotes);
router.delete("/deletenotes/:id", authMiddleware, deleteNotes);
router.put("/update/:id", authMiddleware, updatenotes);
router.get("/showall", authMiddleware, getAll);
router.put("/update-pinned-notes/:id", authMiddleware, updateNotepin);

module.exports = router;

