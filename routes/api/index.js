import express from 'express';
import transactionRoutes from './transactionRoutes.js';
import userRoutes from './userRoutes.js';
const router = express.Router();

router.use('/auth', userRoutes);
router.use('/transactions', transactionRoutes);

export default router;
