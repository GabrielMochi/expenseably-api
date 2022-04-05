import { NotFoundException } from "@exceptions/not-found.exception";
import { BankModel } from "@models/bank.model";

export const removeBank = async (id: string): Promise<void> => {
  const bank = await BankModel.findById(id);
  if (!bank) throw new NotFoundException();
  await bank.remove();
};
