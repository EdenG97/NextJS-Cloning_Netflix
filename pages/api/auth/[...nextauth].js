import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectDb } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectDb();
        const db = client.db();

        const user = await db
          .collection("Netflix")
          .findOne({
            email: credentials.email,
          });

        if (!user) {
          throw new Error("User not found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Wrong password!");
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
});
