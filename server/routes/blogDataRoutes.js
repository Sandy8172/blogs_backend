const express = require("express");
const router = express.Router();

const blogControllers = require("../controllers/blogDetailsControllers");

router.post("/upload/blog", blogControllers.uploadNewBlog);
router.get("/get/blog/list/:type", blogControllers.getBlogData);
router.get("/get/blogBYid/:id", blogControllers.getBlogById);
router.delete("/delete/blog/:id", blogControllers.deleteBlogHandler);
router.get("/blog/count", blogControllers.getBlogsCount);
router.put("/blog/update/:id", blogControllers.updateBlogs);

module.exports = router;
