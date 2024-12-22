# Ecommerce App

Welcome to the Ecommerce App! This project is a full-stack ecommerce application with a separate frontend and backend.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
    - [Frontend](#frontend)
    - [Backend](#backend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and authorization
- Product listing and search
- Shopping cart and checkout
- Order management

## Installation

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/davymonte80/ecomerce-app.git
    cd ecommerce-app/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the backend directory and add the following:
    ```env
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```

4. Run database migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Use the application to browse products, add them to your cart, and proceed to checkout.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.