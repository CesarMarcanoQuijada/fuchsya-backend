import bcrypt from "bcrypt";

export async function encrypt(password: string) {
  const salt: string = await bcrypt.genSalt(10);
  const enc: string = await bcrypt.hash(password, salt);

  return enc;
}

export async function compare(password: string, enc: string) {
  const areEqual: boolean = await bcrypt.compare(password, enc);

  return areEqual;
}
