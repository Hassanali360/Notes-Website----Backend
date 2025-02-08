const express = require("express")
const router = express.Router();
const {addnotes,deleteNotes,updatenotes} = require("../controllers/notes-controller.js")


router.post('/addnotes', addnotes  );
router.post ("/deletenotes/:id", deleteNotes);
router.put ("/update/:id", updatenotes);

module.exports = router
