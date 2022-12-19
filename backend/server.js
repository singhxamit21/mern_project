const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes")

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is Running")
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n)=> n._id === req.params.id)
    res.send(note);
})

app.listen(process.env.PORT,console.log(`Server Started on port ${process.env.PORT}`))