import express from 'express';
import transactionRoutes from './transactionRoutes.js';
const router = express.Router();

router.use('/auth', userRoutes);
router.use('/transactions', transactionRoutes);

export default router;
