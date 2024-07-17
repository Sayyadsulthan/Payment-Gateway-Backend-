import Transaction from '../models/Transaction.js';
import razorpayHelpers from './razorpayHelpers.js';

const createTransaction = async (transactionData) => {
    const { amount, currency, userId } = transactionData;
    const receipt = `receipt_${new Date().getTime()}`;

    try {
        // creating new orderfromRazorpay
        const order = await razorpayHelpers.createOrder(amount, currency, receipt);
        // creating new transactions
        const transaction = new Transaction({
            transactionId: order.id,
            userId,
            amount,
            currency,
            paymentMethod: { type: 'razorpay', details: order },
            status: 'pending',
            createdAt: new Date(),
        });

        await transaction.save();
        return transaction;
    } catch (error) {
        throw new Error('Error creating transaction: ' + error.message);
    }
};

const processTransaction = async (transactionId, paymentId) => {
    // check for the transaction
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
        throw new Error('Transaction not found.');
    }

    // to interact with external payment provider
    // for now using the razorpay
    try {
        const captureResponse = await razorpayHelpers.capturePayment(paymentId, transaction.amount);
        // updating transaction
        transaction.status = 'processed';
        transaction.updatedAt = new Date();
        await transaction.save();
        return transaction;
    } catch (error) {
        throw new Error('Error processing transaction: ' + error.message);
    }
};

const getTransactionStatus = async (transactionId) => {
    // get the transaction by its ID
    const transaction = await Transaction.findById(transactionId);

    return transaction;
};

const refundTransaction = async (transactionId, amount) => {
    // get the transaction
    const transaction = await Transaction.findById(transactionId);
    // if the transaction not exist
    if (!transaction) {
        throw new Error('Transaction not found.');
    }
    if (transaction.status !== 'processed') {
        throw new Error('Only processed transactions can be refunded.');
    }

    try {
        // Logic to interact with external payment provider for refund
        await razorpayHelpers.refundPayment(transaction.paymentMethod.details.id, amount);
        transaction.status = 'refunded';
        transaction.updatedAt = new Date();
        await transaction.save();
        return transaction;
    } catch (error) {
        throw new Error('Error processing refund: ' + error.message);
    }
};

const transactionHelper = {
    createTransaction,
    getTransactionStatus,
    processTransaction,
    refundTransaction,
};

export default transactionHelper;
