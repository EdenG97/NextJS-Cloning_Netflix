import type { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../../lib/auth";
import { connectDb } from "../../../lib/db";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let client;
  try {
    client = await connectDb();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Connecting to database failed!" });
    client?.close();
    return;
  }

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
