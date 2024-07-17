import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Payment Gateway API',
        version: '1.0.0',
        description: 'API documentation for the Payment Gateway service',
    },
    servers: [
        {
            url: 'http://localhost:8000/api', // Update this URL as needed
            description: 'Development server',
        },
    ],
};

// Options for the swagger docs
const options = {
    swaggerDefinition,
    // Path to the API docs
    apis: [join(__dirname, './routes/api/*.js')], // Update this path based on your actual folder structure
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    // Serve swagger docs the way you like (Recommendation: serve it on /api-docs path)
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
