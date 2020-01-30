const mongoose = require("mongoose");

//Schema
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String
    // required: true
  },
  body: {
    type: String
  },
  date: {
    type: String,
    default: Date.now()
  }
});

//model
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
