import { Bank } from "@domain/bank.domain";
import { CreateBankDto } from "@dtos/create-bank.dto";
import { listBanksByUser as listBanksByUserService } from "@services/bank/list-banks-by-user";
import { createBank as createBankService } from "@services/bank/create-bank";
import { updateBank as updateBankService } from "@services/bank/update-bank";
import { removeBank as removeBankService } from "@services/bank/remove-bank";

export class BankController {
  public async listBanksByUser(userId: string): Promise<Bank[]> {
    const banks = await listBanksByUserService(userId);
    return banks;
  }

  public async createBank(bank: CreateBankDto, userId: string): Promise<Bank> {
    const bankCreated = await createBankService(bank, userId);
    return bankCreated;
  }

  public async updateBank(bank: Bank): Promise<Bank> {
    const bankUpdated = await updateBankService(bank);
    return bankUpdated;
  }

  public async removeBank(id: string): Promise<void> {
    await removeBankService(id);
  }
}
