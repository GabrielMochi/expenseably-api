import { Bank } from "@domain/bank.domain";
import { NotFoundException } from "@exceptions/not-found.exception";
import { BankModel } from "@models/bank.model";

export const updateBank = async (id: string, { name }: Bank): Promise<Bank> => {
  const bankModel = await BankModel.findById(id);

  if (!bankModel) throw new NotFoundException();

  const updatedBank = await BankModel.findByIdAndUpdate(id, { name }, { new: true }).populate(
    "user",
  );

  return updatedBank;
};
