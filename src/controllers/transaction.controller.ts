import { listTransactionsByBank as listTransactionsByUserService } from "@services/transaction/list-transactions-by-bank";
import { createTransaction as createTransactionService } from "@services/transaction/create-transaction";
import { updateTransaction as updateTransactionService } from "@services/transaction/update-transaction";
import { removeTransaction as removeTransactionService } from "@services/transaction/remove-transaction";
import { LoadQueryParams, Transaction } from "@domain/transaction.domain";
import { CreateTransactionDto } from "@dtos/create-transaction.dto";

export class TransactionController {
  public async listTransactionsByUser(
    bankId: string,
    queryParams?: LoadQueryParams,
  ): Promise<Transaction[]> {
    const transactions = await listTransactionsByUserService(bankId, queryParams);
    return transactions;
  }

  public async createTransaction(
    transaction: CreateTransactionDto,
    bankId: string,
  ): Promise<Transaction> {
    const transactionCreated = await createTransactionService(transaction, bankId);
    return transactionCreated;
  }

  public async updateTransaction(id: string, transaction: Transaction): Promise<Transaction> {
    const transactionUpdated = await updateTransactionService(id, transaction);
    return transactionUpdated;
  }

  public async removeTransaction(id: string): Promise<void> {
    await removeTransactionService(id);
  }
}
