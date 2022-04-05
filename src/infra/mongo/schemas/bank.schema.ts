import { Bank } from "@domain/bank.domain";
import { Schema } from "mongoose";

export const bankSchema = new Schema<Bank>(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

bankSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

bankSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

bankSchema.pre("remove", function (callback) {
  this.model("Transaction").remove({ bank: this._id }, callback);
});
