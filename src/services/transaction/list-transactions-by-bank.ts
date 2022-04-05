import { LoadQueryParams, Transaction } from "@domain/transaction.domain";
import { TransactionModel } from "@models/transaction.model";
import { Types } from "mongoose";

export const listTransactionsByBank = async (
  bankId: string,
  queryParams?: LoadQueryParams,
): Promise<Transaction[]> => {
  const transactions = await TransactionModel.find(
    {
      bank: new Types.ObjectId(bankId),
      category: queryParams?.category,
      $text: { $search: queryParams?.search },
    },
    { score: { $meta: "textScore" } },
  ).sort({ score: { $meta: "textScore" } });

  for (const transaction of transactions) {
    await transaction.populate("bank");
    await transaction.populate("bank.user");
  }

  return transactions;
};
