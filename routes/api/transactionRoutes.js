import express from 'express';
import {
    createTransaction,
    getTransactionStatus,
    processTransaction,
    refundTransaction,
} from '../../controllers/transactionController.js';
import auth from '../../middlewares/auth.js';

const router = express.Router();
// TODO Authentication
router.post('/', auth, createTransaction);
router.post('/:transactionId/process', auth, processTransaction);
router.get('/:transactionId', auth, getTransactionStatus);
router.post('/:transactionId/refund', auth, refundTransaction);

export default router;
