import { transactionSchema } from "@infra/mongo/schemas/transaction.schema";
import { model } from "mongoose";

export const TransactionModel = model("Transaction", transactionSchema);
