import { User } from "../database/models/user";
import { compare } from "../libs/passwordCrypter";
import { sign } from "../libs/jwt";
import { AuthInterface } from '../types/AuthInterface';

export async function Login(_: any, { email, password }: AuthInterface) {
  if (password.length < 8) return "Password too short";
  if (password === "12345678") return "Weak password";

  console.log(email);

  const registeredUser = await User.findOne({ email });

  if (registeredUser === null) return "The user does not exist";

  const areEqual = await compare(password, registeredUser.password)

    console.log(password)
    console.log(registeredUser.password)

  if (!areEqual) return "Incorrect password";

  let user = {
    ...registeredUser,
    id: registeredUser._id,
  };

  delete registeredUser._id;
  delete registeredUser._v;

  const token = await sign(user);

  return token;
}
