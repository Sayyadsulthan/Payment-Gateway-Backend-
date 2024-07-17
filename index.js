import express from 'express';
import { configDotenv } from 'dotenv';
import db from './config/mongoose.js';
configDotenv();
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.status(200).json('Welcome to Payment Gate way'));

app.get('/*', (req, res, next) => {
    res.status(400).json({ message: 'Invalid API URL' });
});

app.listen(port, (err) => console.log(err ? err.message : 'server is running on port: ' + port));
