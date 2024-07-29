import { Type } from "lucide";
import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    Type: String,
    required: true,
  },
  description: {
    Type: String,
    required: true,
  },
  category: {
    Type: String,
    required: true,
  },
  author: {
    Type: String,
    required: true,
  },
  image: {
    Type: String,
    required: true,
  },
  aurthorImg: {
    Type: String,
    required: true,
  },
  date: {
    Type: date,
    default: Date.now(),
  },
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", Schema);

export default BlogModel;
