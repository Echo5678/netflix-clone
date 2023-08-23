import mongoose from "mongoose";

interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  emailVerified: Date;
  image: string;
  favorites: [mongoose.Schema.Types.ObjectId];
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  emailVerified: { type: Date, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export default User;
