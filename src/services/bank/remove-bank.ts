import { BankModel } from "@models/bank.model";

export const removeBank = async (id: string): Promise<void> => {
  await BankModel.findByIdAndRemove(id);
};
