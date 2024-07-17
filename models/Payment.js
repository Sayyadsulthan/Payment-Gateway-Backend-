import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    transactionId: { type: Schema.Types.ObjectId, ref: 'Transaction', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentMethod: {
        type: { type: String, required: true },
        details: { type: Schema.Types.Mixed, required: true },
    },
    status: { type: String, enum: ['pending', 'processed', 'refunded'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Payment', paymentSchema);
