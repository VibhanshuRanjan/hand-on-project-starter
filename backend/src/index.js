const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongo db database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.listen(process.env.PORT, () => {
  console.log("Backend server is running at " + process.env.PORT);
});
