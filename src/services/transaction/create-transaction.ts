import { Transaction } from "@domain/transaction.domain";
import { CreateTransactionDto } from "@dtos/create-transaction.dto";
import { TransactionModel } from "@models/transaction.model";
import { Types } from "mongoose";

export const createTransaction = async (dto: CreateTransactionDto): Promise<Transaction> => {
  const transaction = new TransactionModel({
    amount: dto.amount,
    category: dto.category,
    currency: dto.currency,
    description: dto.description,
    type: dto.type,
    bank: { _id: new Types.ObjectId(dto.bank.id) },
  });

  await transaction.save();
  await transaction.populate("bank");
  await transaction.populate("bank.user");

  return transaction;
};
