const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongo db database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running at " + process.env.PORT);
});
