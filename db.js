const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cwm"
});

db.connect((err) => {
  if (err) {
    console.log("DB error:", err);
  } else {
    console.log("DB connected");
  }
});

module.exports = db;