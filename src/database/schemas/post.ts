import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
    by: String,
    timestamp: Number,
    content: String,
    images: [String],
    comments: [String],
    likes: [String],
})
