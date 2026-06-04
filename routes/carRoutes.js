const express = require("express");
const router = express.Router();
const db = require("../db");


// ======================
// ADD CAR
// ======================
router.post("/", (req, res) => {
  const {
    plakeno,
    cartype,
    carsize,
    drivername,
    phone,
  } = req.body;

  const sql =
    "INSERT INTO car (plakeno, cartype, carsize, drivername, phone) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [plakeno, cartype, carsize, drivername, phone],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Failed to add car",
        });
      }

      res.json({
        message: "Car added successfully",
      });
    }
  );
});


// ======================
// GET ALL CARS
// ======================
router.get("/", (req, res) => {

  const sql = "SELECT * FROM car";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to fetch cars",
      });
    }

    res.json(result);
  });
});


// ======================
// UPDATE CAR
// ======================
router.put("/:plakeno", (req, res) => {

  const { plakeno } = req.params;

  const {
    cartype,
    carsize,
    drivername,
    phone,
  } = req.body;

  const sql =
    "UPDATE car SET cartype=?, carsize=?, drivername=?, phone=? WHERE plakeno=?";

  db.query(
    sql,
    [cartype, carsize, drivername, phone, plakeno],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Failed to update car",
        });
      }

      res.json({
        message: "Car updated successfully",
      });
    }
  );
});


// ======================
// DELETE CAR
// ======================
router.delete("/:plakeno", (req, res) => {

  const { plakeno } = req.params;

  const sql = "DELETE FROM car WHERE plakeno=?";

  db.query(sql, [plakeno], (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to delete car",
      });
    }

    res.json({
      message: "Car deleted successfully",
    });
  });
});

module.exports = router;