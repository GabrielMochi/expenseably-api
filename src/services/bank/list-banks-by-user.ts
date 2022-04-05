import { Bank } from "@domain/bank.domain";
import { BankModel } from "@models/bank.model";

export const listBanksByUser = async (userId: string): Promise<Bank[]> => {
  const banks = await BankModel.find({ user: userId });
  await Promise.all(banks.map(({ populate }) => populate("user")));
  return banks;
};
