import { MongoClientOptions } from "mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  auth: {
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
  },
} as MongoClientOptions;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  //@ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    //@ts-ignore
    global._mongoClientPromise = client.connect();
  }
  //@ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise as Promise<MongoClient>;
