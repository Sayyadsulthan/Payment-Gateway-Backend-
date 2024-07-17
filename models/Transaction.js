import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    // in case of the different payment methods are available
    paymentMethod: {
        type: { type: String, required: true },
        details: { type: Schema.Types.Mixed, required: true },
    },
    status: { type: String, enum: ['pending', 'processed', 'refunded'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

transactionSchema.methods.refund = async function () {
    if (this.status !== 'processed') {
        throw new Error('Cannot refund transaction that is not processed.');
    }

    // Logic to interact with external payment provider for refund

    this.status = 'refunded';
    this.updatedAt = new Date();
    await this.save();
    return this;
};

export default mongoose.model('Transaction', transactionSchema);
