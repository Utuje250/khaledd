const express = require("express");
const cors = require("cors");
const db = require("./db");

const carRoutes = require("./routes/carRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const packageRoutes = require("./routes/packageRoutes");
const servicepackageRoutes = require("./routes/servicepackageRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/car", carRoutes);
app.use("/payment", paymentRoutes);
app.use("/package", packageRoutes);
app.use("/servicepackage", servicepackageRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
