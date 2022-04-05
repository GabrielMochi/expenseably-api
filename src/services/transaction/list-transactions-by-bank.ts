import { LoadQueryParams, Transaction } from "@domain/transaction.domain";
import { TransactionModel } from "@models/transaction.model";
import { Types, FilterQuery } from "mongoose";

export const listTransactionsByBank = async (
  bankId: string,
  queryParams?: LoadQueryParams,
): Promise<Transaction[]> => {
  const filter: FilterQuery<Transaction> = {
    bank: new Types.ObjectId(bankId),
  };

  const projection: Record<string, unknown> = {};

  if (queryParams?.category) filter.category = queryParams?.category;

  if (queryParams?.search) {
    filter.$text = { $search: queryParams?.search };
    projection.score = { $meta: "textScore" };
  }

  const sort = queryParams?.search
    ? { score: { $meta: "textScore" } }
    : { createdAt: "descending" };

  const transactions = await TransactionModel.find(filter, projection).sort(sort);

  for (const transaction of transactions) {
    await transaction.populate("bank");
    await transaction.populate("bank.user");
  }

  return transactions;
};
