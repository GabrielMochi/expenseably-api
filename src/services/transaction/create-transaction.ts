import { Transaction } from "@domain/transaction.domain";
import { CreateTransactionDto } from "@dtos/create-transaction.dto";
import { TransactionModel } from "@models/transaction.model";

export const createTransaction = async (
  createTransactionDto: CreateTransactionDto,
  bankId: string,
): Promise<Transaction> => {
  const transaction = new TransactionModel({
    ...createTransactionDto,
    bank: { _id: bankId },
  });

  await transaction.save();
  await transaction.populate("bank");
  await transaction.populate("bank.user");

  return transaction;
};
