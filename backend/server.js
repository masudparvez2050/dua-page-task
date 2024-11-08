const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const port = 3001;

// database connection from "dua_main.sqlite"
const db = new sqlite3.Database("./db/dua_main.sqlite");

// Endpoint for fetching all categories
app.get("/api/categories", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint for fetching all sub_categories
app.get("/api/sub_categories", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint for fetching all duas
app.get("/api/duas", (req, res) => {
  db.all("SELECT * FROM dua", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(rows);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
