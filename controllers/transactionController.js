import TransactionHelper from '../helpers/transactionHelpers.js';

const createTransaction = async (req, res) => {
    const transactionData = req.body;
    try {
        const transaction = await TransactionHelper.createTransaction(transactionData);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const processTransaction = async (req, res) => {
    const { transactionId } = req.params;
    try {
        const transaction = await TransactionHelper.processTransaction(transactionId);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactionStatus = async (req, res) => {
    const { transactionId } = req.params;
    try {
        const transaction = await TransactionHelper.getTransactionStatus(transactionId);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const refundTransaction = async (req, res) => {
    const { transactionId } = req.params;
    try {
        const transaction = await TransactionHelper.refundTransaction(transactionId);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createTransaction, getTransactionStatus, refundTransaction, processTransaction };
