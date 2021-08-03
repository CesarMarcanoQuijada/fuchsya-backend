import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    name: String,
    surname: String,
    password: String,
    timestamp: Number,
    posts: [String],
})
