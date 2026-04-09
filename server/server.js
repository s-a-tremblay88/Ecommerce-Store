const express = require('express');
const cors    = require('cors');
const db      = require('../models/db');      
const Product = require('../models/product'); 
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.send('API running'));

// CREATE
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all (GET ALL)
app.get('/getAll', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /all-stores — fetches products from all team members' deployed stores
const https = require('https');
const http  = require('http');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      let raw = '';
      response.on('data', chunk => raw += chunk);
      response.on('end', () => {
        try {
          resolve(JSON.parse(raw));
        } catch (e) {
          reject(new Error('Invalid JSON from ' + url));
        }
      });
    }).on('error', reject);
  });
}

app.get('/all-stores', async (req, res) => {
  const teamStores = [
    'https://cst8326brettnorbury-production.up.railway.app/getAll',
    'https://module10-store-products-production.up.railway.app/products',
  ];

  try {
    const myProducts = await Product.find(); 

    const responses = await Promise.all(teamStores.map(url => fetchJSON(url)));
    const allProducts = [...myProducts, ...responses.flat()]; 
    res.json(allProducts);

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from one or more stores: ' + err.message });
  }
});

// READ one
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: 'Invalid product ID' });
  }
});


// UPDATE
app.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { productId: req.params.id },
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: 'Invalid product ID' });
  }
});

// DELETE
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ productId: req.params.id });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid product ID' });
  }
});

// Start server only if run directly (NOT during tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`E-Commerce Store server running on port ${PORT}`));
}

module.exports = app;