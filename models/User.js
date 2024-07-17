import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// user schema for authentication and storage purpose
const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' }, // giving the role for the user
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
