import { Transaction } from "@domain/transaction.domain";
import { NotFoundException } from "@exceptions/not-found.exception";
import { TransactionModel } from "@models/transaction.model";

export const updateTransaction = async (
  id: string,
  transaction: Transaction,
): Promise<Transaction> => {
  const transactionModel = await TransactionModel.findById(id);

  if (!transactionModel) throw new NotFoundException();

  const updatedTransaction = await TransactionModel.findByIdAndUpdate(
    id,
    {
      amount: transaction.amount,
      type: transaction.type,
      category: transaction.category,
      currency: transaction.currency,
      description: transaction.description,
    },
    { new: true },
  ).populate("bank");

  await updatedTransaction.populate("bank.user");

  return updatedTransaction;
};
