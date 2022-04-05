import { Bank } from "@domain/bank.domain";
import { CreateBankDto } from "@dtos/create-bank.dto";
import { BankModel } from "@models/bank.model";

export const createBank = async ({ name }: CreateBankDto, userId: string): Promise<Bank> => {
  const bank = new BankModel({
    name,
    user: { _id: userId },
  });

  await bank.save();
  await bank.populate("user");

  return bank;
};
