const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "../.env" });
const User = require("./models/users");
const blogRouters = require("./routes/blogDataRoutes");
const dbURI = process.env.dbURI;

mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("connected to mongoDB successfully");
  })
  .catch((err) => {
    {
      console.log("Err connectiong mongoDB : -- ", err);
    }
  });

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", blogRouters);

const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
