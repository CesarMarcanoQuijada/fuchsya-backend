import mongoose from "mongoose";
import { postSchema } from "../schemas/post";

export const Post = mongoose.model("post", postSchema)
