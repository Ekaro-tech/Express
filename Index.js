const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// In-memory data store
let items = [];
let nextId = 1;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// GET /items - Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id - Get item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST /items - Create new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const newItem = { id: nextId++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: 'Item not found' });
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id - Delete item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  items.splice(index, 1);
  res.status(204).send();
});

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
