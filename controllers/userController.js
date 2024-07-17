import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        // checking the required data is given from client
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'please fill the all credentials' });
        }

        // check if the user already exist
        const isUserExist = User.findOne({ email });
        if (isUserExist) {
            return res.status(409).json({ message: 'User already exist!!' });
        }

        // else create new user
        await bcrypt.compare(password, hash);
        const user = await User.create(req.body);
        JsonWebTokenError;
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // checking the required data is given from client
        if (!email || !password) {
            return res.status(400).json({ message: 'Fill the valid credentials!!' });
        }

        const user = User.findOne({ email }).select('username email role password');
        if (!user) {
            return res.status(409).json({ message: 'User not found!!' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            { username: user.name, email: user.email, role: user.role },
            env.JWT_SECRET,
            { algorithm: 'RS256', expiresIn: '2d' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

export { registerUser, loginUser };
