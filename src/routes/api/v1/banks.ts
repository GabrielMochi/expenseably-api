import { BankController } from "@controllers/bank.controller";
import { Bank } from "@domain/bank.domain";
import { CreateBankDto } from "@dtos/create-bank.dto";
import { NotFoundException } from "@exceptions/not-found.exception";
import { asyncHandler } from "@middlewares/async-handler.middleware";
import { validation } from "@middlewares/validation.middleware";
import Boom from "boom";
import { Router } from "express";

export const banks = Router();

const bankController = new BankController();

banks.get(
  "/",
  asyncHandler(async (req) => {
    const { id: userId } = req.session.auth;
    const banks = await bankController.listBanksByUser(userId);
    return { banks };
  }),
);

banks.get("/:id/transactions", () => {
  throw new Error("method not implemented");
});

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
      if (error instanceof NotFoundException) throw Boom.notFound();
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
      if (error instanceof NotFoundException) throw Boom.notFound();
      throw error;
    }
  }),
);
