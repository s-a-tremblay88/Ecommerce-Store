# Tech Haven – E-Commerce Store Module

A full-stack e-commerce store built with **Node.js**, **Express**, **MongoDB Atlas**, and **Mongoose**. Provides a complete CRUD API for products and a browser-based frontend for manual testing.

---

## Setup

1. Clone or unzip the project folder.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and fill in your MongoDB Atlas URI and student email.
4. Run `npm run seed` to populate 5 sample products in MongoDB.
5. Run `npm start` to start the server at `http://localhost:3000`.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/products` | Retrieve all products (GetAll) |
| GET | `/products/:id` | Retrieve one product by MongoDB `_id` |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product |

## Testing

```bash
npm test          # Run your own getAll test
node automate.js  # Run all team tests sequentially
```

> **Disclaimer:** This is student work created for demonstration of web development skills only.
