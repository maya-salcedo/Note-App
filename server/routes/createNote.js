const express = require('express');
//const pool = require('../db');
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { NoteTitle, NoteContent} = req.body;
    console.log(NoteTitle);
    console.log(NoteContent);
  } catch {
    console.error(err.message);
    res.status(500).send("Something went wrong");
  }
});


module.exports = router;