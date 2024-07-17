import express from 'express';
import db from './config/mongoose.js';
import apiRoutes from './routes/api/index.js';
import bodyParser from 'body-parser';
import env from './config/environment.js';
const app = express();
const port = env.PORT || 8080;

app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.status(200).json('Welcome to Payment Gate way'));

app.get('/*', (req, res, next) => {
    res.status(400).json({ message: 'Invalid API URL' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, (err) => console.log(err ? err.message : 'server is running on port: ' + port));
