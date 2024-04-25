const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "../.env" });
const blogRouters = require("./routes/blogDataRoutes");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
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

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT} ip ${HOST}`);
});
