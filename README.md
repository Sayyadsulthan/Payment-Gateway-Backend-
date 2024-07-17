# Payment Gateway Backend

This is a backend service for a payment gateway, handling transactions for various payment methods like credit cards, debit cards, and digital wallets.

## Table of Contents

<!--
-   [System Design](#system-design)
-   [Architecture](#architecture)
-   [Database Schema](#database-schema) -->

-   [API Endpoints](#api-endpoints)
-   [Setup and Run](#setup-and-run)
-   [Docker](#docker)
-   [Swagger Documentation](#swagger-documentation)
-   [Environment Variables](#environment-variables)
-   [Contributing](#contributing)

<details>
  <!-- <summary>## System Design</summary> -->
 
  
  <!-- ### Architecture

The architecture is designed to be scalable and secure, with components for handling different types of transactions, including creating, processing, and refunding payments. -->

<!--
### High-Level Architecture Diagram

![High-Level Architecture](path_to_architecture_diagram.png)

### Database Schema

![Database Schema](path_to_database_schema.png)

### API Design

The API supports CRUD operations related to payments, including creating, processing, retrieving payment status, and handling refunds.

### Data Flow and Interaction

![Data Flow Diagram](path_to_data_flow_diagram.png) -->
 <summary>## System Design</summary>

### Security Measures

-   **Data Encryption**: Sensitive data is encrypted both in transit and at rest.
-   **Authentication and Authorization**: JWT is used for authentication and authorization.
-   **Logging**: Morgan with rotate-file-stream is used for logging.
</details>

<details>
  <summary>## API Endpoints</summary>
  
  ### User Endpoints

-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Login a user.

### Transaction Endpoints

-   `POST /api/transactions`: Create a new transaction.
-   `GET /api/transactions/:id`: Retrieve a transaction by ID.
-   `POST /api/transactions/:id/process`: Process a transaction.
-   `POST /api/transactions/:id/refund`: Refund a transaction.
</details>

<details>
  <summary>## Setup and Run</summary>
  
  ### Prerequisites

-   Node.js (v16 or higher)
-   MongoDB
-   Docker (optional, for containerization)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Sayyadsulthan/Payment-Gateway-Backend-.git
    cd payment-gateway
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```
        MONGO_URI=your_mongodb_uri
        JWT_SECRET=your_jwt_secret
        RAZORPAY_KEY_ID=your_razorpay_key_id
        RAZORPAY_KEY_SECRET=your_razorpay_key_secret
        ```

4. Start the application:
`bash
     npm start
     `
  </details>

<details>
  <summary>## Docker</summary>
  
  ### Building and Running with Docker

1. Build the Docker image:

    ```bash
    docker build -t payment-gateway .
    ```

2. Run the Docker container:
`bash
     docker run -p 8000:8000 payment-gateway
     `
  </details>

<details>
  <summary>## Swagger Documentation</summary>
  
  API documentation is available via Swagger at `/api-docs`.

-   Access the documentation at: `http://localhost:8000/api-docs`
</details>

<details>
  <summary>## Environment Variables</summary>
  
  - `MONGO_URI`: MongoDB connection string.
  - `JWT_SECRET`: Secret key for JWT.
  - `RAZORPAY_KEY_ID`: Razorpay key ID.
  - `RAZORPAY_KEY_SECRET`: Razorpay key secret.
</details>

<details>
  <summary>## Contributing</summary>
  
  1. Fork the repository.
  2. Create a new branch (`git checkout -b feature-branch`).
  3. Make your changes.
  4. Commit your changes (`git commit -m 'Add some feature'`).
  5. Push to the branch (`git push origin feature-branch`).
  6. Create a new Pull Request.
</details>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
