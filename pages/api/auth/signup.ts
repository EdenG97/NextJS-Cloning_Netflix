import type { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectDb } from "../../../lib/db";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const data = req.body;

    const {
      email,
      password,
    }: { email: string; password: string } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.length < 6 ||
      password.length > 36
    ) {
      res.status(422).json({
        message:
          "Invalid input - password should at least 6 characters",
      });
      return;
    }

    const client = await connectDb();
    const db = client.db();

    // Checking existing user
    const existingUser = await db
      .collection("Netflix")
      .findOne({ email: email });

    if (existingUser) {
      res
        .status(422)
        .json({ message: "User Already Exists" });
      client.close();
      return;
    }

    // Encrypted Password
    const hashedPassword = await hashPassword(password);

    // Insert data to DB
    const result = await db
      .collection("Netflix")
      .insertOne({
        email: email,
        password: hashedPassword,
      });

    result &&
      res
        .status(200)
        .json({ message: "Successfully Registered" });

    client.close();
  }
};

export default handler;
