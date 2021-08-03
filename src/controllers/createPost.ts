import { Post } from "../database/models/post";
import { User } from "../database/models/user";
import { decode } from "../libs/jwt";
import { PostInterface } from "../types/PostInterface";

export async function CreatePost(_: any, data: PostInterface) {
  const { token, content, images } = data;
  let user: any = await decode(token || "");
  user = user._doc;

  const savePost: PostInterface = {
    by: user._id,
    timestamp: new Date().getTime(),
    token,
    content,
    images,
    comments: [],
    likes: [],
  };

  const post = await Post.create(savePost);

  const dbUser = await User.findById(user._id);

  await User.findByIdAndUpdate(user._id, {
    ...dbUser,
    posts: dbUser.posts.push(post._id),
  });

  return post._id;
}
