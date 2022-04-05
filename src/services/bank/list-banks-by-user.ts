import { Bank } from "@domain/bank.domain";
import { BankModel } from "@models/bank.model";
import { Types } from "mongoose";

export const listBanksByUser = async (userId: string): Promise<Bank[]> => {
  const banks = await BankModel.find({ user: new Types.ObjectId(userId) });

  for (const bank of banks) {
    await bank.populate("user");
  }

  return banks;
};
