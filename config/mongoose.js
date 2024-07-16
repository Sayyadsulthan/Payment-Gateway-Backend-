import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv();

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('connected to DB..'))
    .catch((err) => console.error(`Error while connecting to db ${err.message}`));

export default mongoose;
