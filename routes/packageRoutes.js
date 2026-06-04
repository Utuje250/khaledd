const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { packageno, packagename, packagedescription, packageprice } = req.body;
  db.query(
    "INSERT INTO package (packageno, packagename, packagedescription, packageprice) VALUES (?,?,?,?)",
    [packageno, packagename, packagedescription, packageprice],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Package added successfully" });
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM package", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

router.put("/:packageno", (req, res) => {
  const { packageno } = req.params;
  const { packagename, packagedescription, packageprice } = req.body;
  db.query(
    "UPDATE package SET packagename=?, packagedescription=?, packageprice=? WHERE packageno=?",
    [packagename, packagedescription, packageprice, packageno],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Package updated successfully" });
    }
  );
});

router.delete("/:packageno", (req, res) => {
  const { packageno } = req.params;
  db.query("DELETE FROM package WHERE packageno=?", [packageno], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Package deleted successfully" });
  });
});

module.exports = router;
