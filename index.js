import express from 'express';
import db from './config/mongoose.js';
import apiRoutes from './routes/api/index.js';
import bodyParser from 'body-parser';
import env from './config/environment.js';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';
import setupSwagger from './swagger.js';

const app = express();
const port = env.PORT || 8000;

// Middleware setup
app.use(bodyParser.json());

app.use(express.json());

// swagger setup for documentation
// Setup Swagger
setupSwagger(app);
// for logger check and store the logs in lohs folder
app.use(
    morgan('combined', {
        stream: createStream('access.log', { interval: '1d', path: './logs' }),
    })
);

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.status(200).json('Welcome to Payment Gate way'));

// default invalid url missmatch handller
app.get('/*', (req, res, next) => {
    res.status(400).json({ message: 'Invalid API URL' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, (err) => console.log(err ? err.message : 'server is running on port: ' + port));
