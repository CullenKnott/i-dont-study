const path = require("path");
const fs = require("fs");
const router = require("express").Router();

// npm package that allows for unique ids to be created
var uniqid = require("uniqid");

// routing
// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client.
router.post("/notes", (req, res) => {
  let db = fs.readFileSync(path.join(__dirname, "../db/db.json"));

  console.log(db);
  db = JSON.parse(db);
  // creating body for note
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    // creating unique id for each note
    id: uniqid(),
  };
  // pushing created note to be written in the db.json file
  db.push(userNote);
  console.log(db);

  fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));
  res.json(db);
});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
router.delete("/notes/:id", (req, res) => {
  // reading notes form db.json
  let db = fs.readFileSync(path.join(__dirname, "../db/db.json"));

  db = JSON.parse(db);
  // removing note with id
  let deleteNotes = db.filter((item) => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(deleteNotes)
  );
  res.json(deleteNotes);
});

module.exports = router;
