import type { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from "../../../lib/db";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const data = req.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      !password.trim().length < 6
    ) {
      res.status(422).json({
        message:
          "Invalid input - password should at least 6 characters",
      });
      return;
    }

    const db = await connectDb();

    

  }
};

export default handler;
