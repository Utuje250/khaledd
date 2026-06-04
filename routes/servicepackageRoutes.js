const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { recordno, servicedate, packageno, plakeno } = req.body;
  db.query(
    "INSERT INTO servicepackage (recordno, servicedate, packageno, plakeno) VALUES (?,?,?,?)",
    [recordno, servicedate, packageno, plakeno],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "ServicePackage added successfully" });
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM servicepackage", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

router.put("/:recordno", (req, res) => {
  const { recordno } = req.params;
  const { servicedate, packageno, plakeno } = req.body;
  db.query(
    "UPDATE servicepackage SET servicedate=?, packageno=?, plakeno=? WHERE recordno=?",
    [servicedate, packageno, plakeno, recordno],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "ServicePackage updated successfully" });
    }
  );
});

router.delete("/:recordno", (req, res) => {
  const { recordno } = req.params;
  db.query("DELETE FROM servicepackage WHERE recordno=?", [recordno], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "ServicePackage deleted successfully" });
  });
});

module.exports = router;
