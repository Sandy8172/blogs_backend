const express = require("express");
const router = express.Router();

const blogControllers = require("../controllers/blogDetailsControllers");

router.post("/upload/blog", blogControllers.updateData);
router.get("/get/blog/list/:type", blogControllers.getBlogData);
router.get("/get/blogBYid/:id", blogControllers.getBlogById);
router.delete("/delete/blog/:id", blogControllers.deleteBlogHandler);
router.get("/blog/count", blogControllers.getBlogsCount);

module.exports = router;
