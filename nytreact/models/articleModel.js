const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },

  date: {
    type: String,
    trim: true,
  },

  url: {
    type: String,
    trim: true,
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;