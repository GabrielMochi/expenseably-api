import { transactionSchema } from "@infra/mongo/schemas/transaction.schema";
import { model } from "mongoose";

export const Transaction = model("Transaction", transactionSchema);
