import { TransactionController } from "@controllers/transaction.controller";
import { Transaction } from "@domain/transaction.domain";
import { CreateTransactionDto } from "@dtos/create-transaction.dto";
import { NotFoundException } from "@exceptions/not-found.exception";
import { asyncHandler } from "@middlewares/async-handler.middleware";
import { validation } from "@middlewares/validation.middleware";
import { notFound } from "@hapi/boom";
import { Router } from "express";

export const transactions = Router();

const transactionController = new TransactionController();

transactions.post(
  "/",
  validation(CreateTransactionDto),
  asyncHandler(async (req) => {
    const transaction = await transactionController.createTransaction(req.body);
    return { transaction };
  }),
);

transactions.put(
  "/:id",
  validation(Transaction),
  asyncHandler(async (req) => {
    try {
      const updatedTransaction = await transactionController.updateTransaction(
        req.params.id,
        req.body,
      );

      return { transaction: updatedTransaction };
    } catch (error) {
      if (error instanceof NotFoundException) throw notFound();
      throw error;
    }
  }),
);

transactions.delete(
  "/:id",
  asyncHandler(async (req) => {
    try {
      await transactionController.removeTransaction(req.params.id);
    } catch (error) {
      if (error instanceof NotFoundException) throw notFound();
      throw error;
    }
  }),
);
