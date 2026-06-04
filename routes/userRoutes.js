const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { id, username, email, password } = req.body;
  db.query(
    "INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)",
    [id, username, email, password],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User added successfully" });
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  db.query(
    "UPDATE users SET username=?, email=?, password=? WHERE id=?",
    [username, email, password, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User updated successfully" });
    }
  );
});


router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User deleted successfully" });
  });
});

module.exports = router;
