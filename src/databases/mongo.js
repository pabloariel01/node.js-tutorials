import { MongoClient } from "mongodb";

const execute = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017");

  const db = client.db("node-course");

  await db.collection("products").insertOne({ name: "Bicecle" });
  const products = await db.collection("products").find({}).toArray();
  console.log(products);
  console.log("done importing");

  client.close();
};
execute();
