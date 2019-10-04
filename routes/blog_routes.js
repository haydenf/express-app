const express = require("express");
const router = express.Router();
const BlogController = require("./../controllers/blog_controller");


router.get("/blogs", BlogController.index);

router.post("/blogs", BlogController.create);

router.get("/blogs/new", BlogController.make);

module.exports = router;