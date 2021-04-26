const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { NoteTitle, NoteContent} = req.body;
    const newNote = await pool.query(
      "INSERT INTO notes(title, content) VALUES($1,$2) RETURNING *", [NoteTitle, NoteContent]
    );
    res.json(newNote.rows[0])
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Something went wrong");
  }
});

router.get("/", async (req, res) => {
  try {
    const allNotes = await pool.query("SELECT * FROM notes");
    res.json(allNotes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteNote = await pool.query(
      "DELETE FROM notes WHERE id = $1 RETURNING *", [id]);
    res.json(deleteNote.rows[0]);
    console.log(deleteNote.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

module.exports = router;