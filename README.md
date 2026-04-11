E-Commerce Store Module

A full-stack e-commerce store built with **Node.js**, **Express**, **MongoDB Atlas**, and **Mongoose**. Provides a complete CRUD API for products and a browser-based frontend for manual testing.

---

## Setup

1. Create the project folder.
2. Run `npm install` to install dependencies.
3. `.env` and fill in MongoDB Atlas URI.
4. Populate 5 products in MongoDB Atlas.
5. Run `npm start` to start the server at `http://localhost:3000`, along with MongoDB Atlas `mongodb+srv://trem0417:123456789!@e-commerceproducts.qjkaium.mongodb.net/?appName=E-CommerceProducts` and Railway frontend URL `https://ecommerce-store-production-dd48.up.railway.app/`.

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
