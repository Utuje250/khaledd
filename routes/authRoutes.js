const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [username, email, hashedPassword],
      (err) => {
        if (err) {
          console.error("Signup error:", err); // log in backend
          return res.status(500).json({ message: "Database error", error: err.code });
        }
        res.json({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    console.error("Hashing error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(401).json({ message: "User not found" });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  });
});

module.exports = router;
