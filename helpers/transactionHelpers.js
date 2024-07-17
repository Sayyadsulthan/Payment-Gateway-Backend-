import Transaction from '../models/Transaction.js';

const createTransaction = async (transactionData) => {
    // creating new transactions
    const transaction = new Transaction({ ...transactionData, status: 'pending' });
    await transaction.save();
    return transaction;
};

const processTransaction = async (transactionId) => {
    // check for the transaction
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
        throw new Error('Transaction not found.');
    }

    // Logic to interact with external payment provider
    // TODO for later

    // updating transaction
    transaction.status = 'processed';
    transaction.updatedAt = new Date();
    await transaction.save();
    return transaction;
};

const getTransactionStatus = async (transactionId) => {
    // get the transaction by its ID
    const transaction = await Transaction.findById(transactionId);
    return transaction;
};

const refundTransaction = async (transactionId) => {
    // get the transaction
    const transaction = await Transaction.findById(transactionId);
    // if the transaction not exist
    if (!transaction) {
        throw new Error('Transaction not found.');
    }

    // calling the refund method for the transaction which earlier created at transaction schema
    await transaction.refund();
    return transaction;
};

const transactionHelper = {
    createTransaction,
    getTransactionStatus,
    processTransaction,
    refundTransaction,
};

export default transactionHelper;
