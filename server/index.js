// server/index.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello From backend!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
