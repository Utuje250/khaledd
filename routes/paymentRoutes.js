const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { paymentno, amountpaid, paymentdate, plakeno } = req.body;
  db.query(
    "INSERT INTO payment (paymentno, amountpaid, paymentdate, plakeno) VALUES (?,?,?,?)",
    [paymentno, amountpaid, paymentdate, plakeno],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Payment added successfully" });
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM payment", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

router.put("/:paymentno", (req, res) => {
  const { paymentno } = req.params;
  const { amountpaid, paymentdate, plakeno } = req.body;
  db.query(
    "UPDATE payment SET amountpaid=?, paymentdate=?, plakeno=? WHERE paymentno=?",
    [amountpaid, paymentdate, plakeno, paymentno],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Payment updated successfully" });
    }
  );
});

router.delete("/:paymentno", (req, res) => {
  const { paymentno } = req.params;
  db.query("DELETE FROM payment WHERE paymentno=?", [paymentno], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Payment deleted successfully" });
  });
});

module.exports = router;
