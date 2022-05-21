// routes/v1/accounts/index.ts

import express from 'express';

// account route handlers
import { findAccount } from './account-find';
import { listAccounts } from './account-list';
import { createAccount } from './account-create';
import { updateAccount } from './account-update';
import { deleteAccount } from './account-delete';

const router = express.Router();

router.post('/', createAccount);
router.get('/', listAccounts);
router.get('/:id', findAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;
