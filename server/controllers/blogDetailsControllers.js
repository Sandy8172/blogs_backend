const BlogDetails = require("../models/blogData");

const uploadNewBlog = async (req, res) => {
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

const updateBlogs = async (req, res) => {
  const { id } = req.params;
  const { title, summary } = req.body;
  try {
    const blog = await BlogDetails.findByIdAndUpdate(
      id,
      { title, summary },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(201).json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  uploadNewBlog,
  getBlogData,
  getBlogById,
  deleteBlogHandler,
  getBlogsCount,
  updateBlogs,
};
