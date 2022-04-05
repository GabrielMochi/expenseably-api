import {
  Currency,
  Transaction,
  TransactionCategory,
  TransactionType,
} from "@domain/transaction.domain";
import { Schema } from "mongoose";

export const transactionSchema = new Schema<Transaction>({
  amount: { type: String, required: true },
  bank: { type: Schema.Types.ObjectId, ref: "Bank", required: true },
  category: { type: String, enum: TransactionCategory, required: true },
  currency: { type: String, enum: Currency, required: true },
  description: { type: String, required: false, default: "" },
  type: { type: String, enum: TransactionType, required: false },
});

transactionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

transactionSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});
