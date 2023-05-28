import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [sku, setSku] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/products', { name, category, sku });
      console.log(response.data);
      // Reset form state or show success message
    } catch (error) {
      console.error(error);
      // Show error message
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/products/search?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleCreateProduct}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU" />
        <button type="submit">Create Product</button>
      </form>

      <h2>Search Products</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>

      <h2>Search Results</h2>
      <ul>
        {searchResults.map((product, index) => (
          <li key={index}>
            {product.name} - {product.category} - {product.sku}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
