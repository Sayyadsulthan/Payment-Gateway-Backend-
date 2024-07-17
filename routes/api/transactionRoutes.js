import express from 'express';
import {
    createTransaction,
    getTransactionStatus,
    processTransaction,
    refundTransaction,
} from '../../controllers/transactionController.js';
import auth from '../../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction
 *     description: Create a new payment transaction
 *     tags:
 *       - Transactions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 1000
 *               currency:
 *                 type: string
 *                 example: INR
 *               userId:
 *                 type: string
 *                 example: user123
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *       500:
 *         description: Internal server error
 */
// Authentication for all transactions
// logged user can do
router.post('/', auth, createTransaction);

/**
 * @swagger
 * /transactions/process:
 *   post:
 *     summary: Process a transaction
 *     description: Capture a payment for a transaction
 *     tags:
 *       - Transactions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transactionId:
 *                 type: string
 *                 example: order_xyz
 *               paymentId:
 *                 type: string
 *                 example: pay_abc123
 *     responses:
 *       200:
 *         description: Transaction processed successfully
 *       500:
 *         description: Internal server error
 */
router.post('/process', auth, processTransaction);

/**
 * @swagger
 * /transactions/{transactionId}:
 *   get:
 *     summary: Get transaction status
 *     description: Retrieve the status of a transaction
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: path
 *         name: transactionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the transaction
 *     responses:
 *       200:
 *         description: Transaction status retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get('/:transactionId', auth, getTransactionStatus);

/**
 * @swagger
 * /transactions/{transactionId}/refund:
 *   post:
 *     summary: Refund a transaction
 *     description: Initiate a refund for a processed transaction
 *     tags:
 *       - Transactions
 *     parameters:
 *       - in: path
 *         name: transactionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Transaction refunded successfully
 *       500:
 *         description: Internal server error
 */
router.post('/:transactionId/refund', auth, refundTransaction);

export default router;
