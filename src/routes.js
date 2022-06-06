const express = require('express');
const pokemonController = require('./controllers/pokemonController');
const router = express.Router();

router.use('/', pokemonController);
router.use('/pokemons', pokemonController);

module.exports = router;