const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/authRoutes");
const app = express();
app.use(express.json());
app.use(cors());//cross origin resourse sharing
app.use("/api/v1/users",userRoutes);
module.exports = app;