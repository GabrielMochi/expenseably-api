import { NotFoundException } from "@exceptions/not-found.exception";
import { TransactionModel } from "@models/transaction.model";

export const removeTransaction = async (id: string): Promise<void> => {
  const transaction = await TransactionModel.findById(id);
  if (!transaction) throw new NotFoundException();
  await transaction.remove();
};
