import { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from "../../../lib/db";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const data = req.body;

    const { email } = data;

    if (!email || !email.includes("@")) {
      res
        .status(422)
        .json({ message: "Invalid email address" });
      return;
    }

    const client = await connectDb();
    const db = client.db();

    const existingEmail = await db
      .collection("Netflix")
      .findOne({ email: email });

    if (existingEmail) {
      res
        .status(200)
        .json({ message: "Directed to login" });
      client.close();
      return;
    } else if (!existingEmail) {
      res
        .status(404)
        .json({ message: "Directed to signup" });
    }

    client.close();
  }
};

export default handler;
