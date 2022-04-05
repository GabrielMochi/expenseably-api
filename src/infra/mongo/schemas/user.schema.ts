import { User } from "@domain/user.domain";
import { Schema } from "mongoose";

export const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});
