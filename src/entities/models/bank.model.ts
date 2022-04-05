import { bankSchema } from "@infra/mongo/schemas/bank.schema";
import { model } from "mongoose";

export const BankModel = model("Bank", bankSchema);
