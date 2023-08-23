import mongoose from "mongoose";

interface IVerificationToken {
  _id: string;
  identifier: string;
  token: string;
  expires: Date;
}

const verificationTokenSchema = new mongoose.Schema<IVerificationToken>({
  identifier: { type: String, required: true },
  token: { type: String, required: true },
  expires: { type: Date, required: true },
});

const VerificationToken =
  mongoose.models?.VerificationToken ||
  mongoose.model<IVerificationToken>(
    "VerificationToken",
    verificationTokenSchema
  );

export default VerificationToken;
