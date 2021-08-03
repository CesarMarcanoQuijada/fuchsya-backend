import { User } from "../database/models/user";
import { sign } from "../libs/jwt";
import { encrypt } from "../libs/passwordCrypter";
import { AuthInterface } from "../types/AuthInterface";

export async function Register(
  _: any,
  { email, name, password, surname, username }: AuthInterface
) {
  if (password.length < 8) return "Password too short";
  if (password === "12345678") return "Weak password";

  const existentEmail = await User.find({ email });

  if (existentEmail.length > 0) return "Email already registered";

  const existentUsername = await User.find({ username });

  if (existentUsername.length > 0) return "Username taken";

  password = await encrypt(password);

  const timestamp = new Date().getTime();

  const created = await User.create({
    email,
    name,
    password,
    surname,
    username,
    timestamp,
    posts: [],
  });

  let newUser = {
    ...created,
    id: created._id,
  };

  delete newUser._id;
  delete newUser._v;
  delete newUser.password;

  const token = await sign(newUser);

  return token;
}
