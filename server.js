const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

const db = require('./db');

// Create
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const { rows } = await db.query('INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [name, email]);
  res.send(rows[0]);
});

// Read
app.get('/users', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM users');
  res.send(rows);
});

// Update
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const { rows } = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
  res.send(rows[0]);
});

// Delete
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM users WHERE id = $1', [id]);
  res.status(204).send();
});
