import { NextFunction, Request, Response } from 'express';

import { logger } from '../../../utils/logger';
import AccountService, { AccountExistsError } from '../../../services/account-service';

export const createAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    logger.info('handler::createAccount');
    const accountService = new AccountService();
    const account = await accountService.createOne(req.body);
    // do not return sensitive account attributes
    res.send(account);
  } catch (err: AccountExistsError | unknown) {
    if (err instanceof AccountExistsError) {
      res.status(409).end();
    } else {
      next(err);
    }
  }
};
