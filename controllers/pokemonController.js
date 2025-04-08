const axios = require('axios');
const cache = require('../cache/memoryCache');

const getPokemonList = async (req, res) => {
  const { page = 1, type } = req.query;
  const key = `page-${page}-type-${type || 'all'}`;

  const cached = cache.get(key);
  if (cached) {
    console.log(`📦 Usando caché para ${key}`);
    return res.json(cached);
  }

  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    let results = await Promise.all(response.data.results.map(async (pokemon) => {
      const details = await axios.get(pokemon.url);
      return {
        id: details.data.id,
        name: details.data.name,
        types: details.data.types.map(t => t.type.name),
        image: details.data.sprites.front_default,
      };
    }));

    if (type) {
      results = results.filter(p => p.types.includes(type.toLowerCase()));
    }

    cache.set(key, results);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pokemones' });
  }
};

module.exports = { getPokemonList };
