import { configDotenv } from 'dotenv';
configDotenv();

const envVariable = process.env;

const env = {
    PORT: envVariable.PORT || 8000,
    DB_URI: envVariable.DB_URI || 'mongodb://127.0.0.1:27017/Payment-GateWay-Aassesment',
    JWT_SECRET: envVariable.JWT_SECRET || 'sayyadSecret',
    JWT_ALGORITHM: envVariable.JWT_ALGORITHM || 'HS256',
    SALT_ROUND: envVariable.SALT_ROUND || 10,
};

export default env;
