import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  shopname: String,
  opening_date: Date,
  closing_date: Date,
  category: String,
  area: String,
  likes: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
