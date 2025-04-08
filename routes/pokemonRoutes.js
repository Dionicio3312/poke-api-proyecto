const express = require('express');
const router = express.Router();
const { getPokemonList } = require('../controllers/pokemonController');

router.get('/pokemons', getPokemonList);

module.exports = router;
