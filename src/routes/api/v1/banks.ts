import { BankController } from "@controllers/bank.controller";
import { TransactionController } from "@controllers/transaction.controller";
import { Bank } from "@domain/bank.domain";
import { LoadQueryParams } from "@domain/transaction.domain";
import { CreateBankDto } from "@dtos/create-bank.dto";
import { NotFoundException } from "@exceptions/not-found.exception";
import { asyncHandler } from "@middlewares/async-handler.middleware";
import { validation } from "@middlewares/validation.middleware";
import { notFound } from "@hapi/boom";
import { Router } from "express";

export const banks = Router();

const bankController = new BankController();
const transactionController = new TransactionController();

banks.get(
  "/",
  asyncHandler(async (req) => {
    const { id: userId } = req.session.auth;
    const banks = await bankController.listBanksByUser(userId);
    return { banks };
  }),
);

banks.get(
  "/:id/transactions",
  asyncHandler(async (req) => {
    const { id: bankId } = req.params;
    const { category, search } = req.query as LoadQueryParams;

    const transactions = await transactionController.listTransactionsByUser(bankId, {
      category,
      search,
    });

    return { transactions };
  }),
);

banks.post(
  "/",
  validation(CreateBankDto),
  asyncHandler(async (req) => {
    const { id: userId } = req.session.auth;
    const bank = await bankController.createBank(req.body, userId);
    return { bank };
  }),
);

banks.put(
  "/:id",
  validation(Bank),
  asyncHandler(async (req) => {
    try {
      const updatedBank = await bankController.updateBank(req.params.id, req.body);
      return { bank: updatedBank };
    } catch (error) {
      if (error instanceof NotFoundException) throw notFound();
      throw error;
    }
  }),
);

banks.delete(
  "/:id",
  asyncHandler(async (req) => {
    try {
      await bankController.removeBank(req.params.id);
    } catch (error) {
      if (error instanceof NotFoundException) throw notFound();
      throw error;
    }
  }),
);
