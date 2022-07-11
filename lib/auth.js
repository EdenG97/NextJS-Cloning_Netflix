import { hash, compare } from "bcrypt";

// Signup
export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
};

// Signin
export const verifyPassword = async (
  password,
  hashedPassword
) => {
  const isValid = await compare(password, hashedPassword);

  return isValid;
};
