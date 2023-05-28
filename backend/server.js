const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());
// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory data store for simplicity
let products = [];

// API endpoint for creating products
app.post('/api/products', (req, res) => {
  const { name, category, sku } = req.body;
  const product = { name, category, sku };
  products.push(product);
  res.status(201).json(product);
});

// API endpoint for searching products
app.get('/api/products/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const searchTerms = query.split(' ').filter(term => term !== ''); // Split query into individual search terms
  const results = products.filter(product => {
    const { name, category, sku } = product;
    const productTerms = `${name} ${category} ${sku}`.toLowerCase().split(' ');
    return searchTerms.every(searchTerm => productTerms.some(productTerm => productTerm.includes(searchTerm)));
  });
  res.json(results);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
