import Razorpay from 'razorpay';
import env from '../config/environment.js';

const razorpay = new Razorpay({
    key_id: env.RAZORPAY_KEY_ID,
    key_secret: env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (amount, currency, receipt) => {
    const options = {
        amount: amount * 100, // Amount in paise
        currency, //eg: INR
        receipt,
    };

    try {
        const order = await razorpay.orders.create(options);
        return order;
    } catch (error) {
        throw new Error('Error creating Razorpay order: ' + error.message);
    }
};

const capturePayment = async (paymentId, amount) => {
    try {
        const captureResponse = await razorpay.payments.capture(paymentId, amount * 100); // Amount in paise
        return captureResponse;
    } catch (error) {
        throw new Error('Error capturing Razorpay payment: ' + error.message);
    }
};

const refundPayment = async (paymentId, amount) => {
    const options = {
        payment_id: paymentId,
        amount: amount * 100, // Amount in paise to convert rupees
    };

    try {
        const refund = await razorpay.payments.refund(options);
        return refund;
    } catch (error) {
        throw new Error('Error initiating Razorpay refund: ' + error.message);
    }
};

const razorpayHelpers = { capturePayment, createOrder, refundPayment };
export default razorpayHelpers;
