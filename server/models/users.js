const mongoose = require("mongoose");

const userScheema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("user", userScheema);
