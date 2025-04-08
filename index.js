const express = require('express');
const app = express();
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', pokemonRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
