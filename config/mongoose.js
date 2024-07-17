import mongoose from 'mongoose';
import env from './environment.js';

mongoose
    .connect(env.DB_URI)
    .then(() => console.log('connected to DB..'))
    .catch((err) => console.error(`Error while connecting to db ${err.message}`));

export default mongoose;
