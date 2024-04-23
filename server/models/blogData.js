const mongoose = require("mongoose");

const blogScheema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  summary: {
    type: String,
    require: true,
  },
});

const BlogDetails = mongoose.model("blogDetails", blogScheema);

module.exports = BlogDetails;
