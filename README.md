# E-commerce Cucumber-Cypress Test

This is an e-commerce website, similar to Amazon, with tests added for functionality.

### Important Note

Some URLs in test files are hardcoded due to time constraints, and I encountered some errors but I fixed them. I made it as quickly as I could.

## video demo of the tests.



https://github.com/user-attachments/assets/1dbc883e-22a5-445e-befa-fe93b7681599



## Project Setup

### 1. Install Dependencies

To get the project up and running, you need to install the necessary dependencies and configure the environment.

#### Frontend

Navigate to the `frontend` folder and run:
npm install -f

(Note: The `-f` flag is important)

#### Backend

Navigate to the `backend` folder and run:
npm install

### 2. Environment Configuration

In the `backend` folder, create a `.env` file and add the following:

MONGODB_URL=<your_mongodb_connection_url> JWT_SECRET=<your_jwt_secret_key>

### 3. Running the Project

#### Backend

To start the backend server, run:
npm run start

#### Frontend

To start the frontend, run:
npm run dev

After running the frontend, you will see a URL similar to:
Network: http://192.168.1.4:5173/

This is the URL for accessing the application.

## Running Cypress Tests

### 1. Run Tests

To run the tests, type:
npx cypress run

### 2. Open Cypress UI

To open Cypress for interactive testing, type:
npm cypress open

### 3. Update Cypress Configuration

Before running the tests, make sure to update the `baseUrl` in `cypress.config.js` to match the URL from the frontend. For example:

baseUrl: 'http://192.168.1.4:5173/' // edit this url to the one appear in "Network: http://192.168.1.4:5173/"

You also need to update specific test files with the correct URL.

#### Example in `frontend/cypress/e2e/steps/addToCart.ts`:

When("User should be redirected to Item page", () => { cy.url().should("eq", "http://192.168.1.4:5173/product/nike-slim-shirt")});

Then("User should be redirected to cart page", () => { cy.url().should("eq", "http://192.168.1.4:5173/cart")});

#### Example in `frontend/cypress/e2e/steps/login.ts`:

Then("User should be redirected to home page", () => { cy.url().should("eq", "http://192.168.1.4:5173/"); });

Then("User should be redirected to home page signout", () => { cy.url().should("eq", "http://192.168.1.4:5173/#signout")});

### Important Note

You must update all test URLs in the Cypress files to match the URL shown in your network (e.g., `http://192.168.1.4:5173/`) before running the tests.
