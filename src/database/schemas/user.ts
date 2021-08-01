import mongoose from "mongoose";
import { postSchema } from "./post";

export const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    name: String,
    surname: String,
    password: String,
    timestamp: String,
    posts: [postSchema]
})
