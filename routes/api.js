const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogPost");

router.get("/posts", (req, res) => {
  BlogPost.find({})
    .then(data => res.json(data))
    .catch(err => {
      console.log(err);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;
  const newPost = new BlogPost(data);
  newPost
    .save()
    .then(savedData => {
      res.status(200).json({
        msg: "data saved to database"
      });
    })
    .catch(err => {
      res.json({ msg: `internal server error ${err.message}` });
    });
});
module.exports = router;
