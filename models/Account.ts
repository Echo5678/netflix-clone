import mongoose from "mongoose";

interface IAccount {
  _id: string;
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  id_token: string;
  userId: mongoose.Schema.Types.ObjectId;
}

const accountSchema = new mongoose.Schema<IAccount>({
  provider: { type: String, required: true },
  type: { type: String, required: true },
  providerAccountId: { type: String, required: true },
  access_token: { type: String, required: true },
  expires_at: { type: Number, required: true },
  scope: { type: String, required: true },
  token_type: { type: String, required: true },
  id_token: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Account =
  mongoose.models?.Account ||
  mongoose.model<IAccount>("Account", accountSchema);

export default Account;
