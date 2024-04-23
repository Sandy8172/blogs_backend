const BlogDetails = require("../models/blogData");

const updateData = async (req, res) => {
  const { username, type, title, genre, summary } = req.body;
  try {
    const details = await BlogDetails.create({
      username,
      type,
      title,
      genre,
      summary,
    });
    res.status(201).json({ id: details._id });
  } catch (error) {
    console.log(error);
    res.data("unable to update");
  }
};

const getBlogData = async (req, res) => {
  const type = req.params["type"].split(":")[1];
  try {
    if (type) {
      const data = await BlogDetails.find({ type });
      res.status(200).json(data);
    } else {
      const data = await BlogDetails.find();
      res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    res.send("unable to find");
  }
};
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await BlogDetails.findOne({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.send("unable to find");
  }
};

const deleteBlogHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await BlogDetails.deleteOne({ _id: id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.send("unable to find");
  }
};
const getBlogsCount = async (req, res) => {
  try {
    const totalCount = await BlogDetails.find().count();
    const travelCount = await BlogDetails.find({ type: "Travel" }).count();
    const readingCount = await BlogDetails.find({ type: "Reading" }).count();
    const personalCount = await BlogDetails.find({
      type: "Personal",
    }).count();
    const count = { totalCount, travelCount, readingCount, personalCount };
    res.status(201).json(count);
  } catch (error) {}
};

module.exports = {
  updateData,
  getBlogData,
  getBlogById,
  deleteBlogHandler,
  getBlogsCount,
};
