import mongoose from "mongoose";

interface ISession {
  _id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: mongoose.Schema.Types.ObjectId;
}

const sessionSchema = new mongoose.Schema<ISession>({
  sessionToken: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  expires: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Session =
  mongoose.models?.Session ||
  mongoose.model<ISession>("Session", sessionSchema);

export default Session;
