import { MongoClient } from "mongodb";

export const connectDb = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bbmez.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  return client;
};
