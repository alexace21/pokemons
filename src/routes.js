const express = require('express');

const pokemonController = require('./controllers/pokemonController');
const elementsController = require('./controllers/elementsController');

const router = express.Router();

router.use('/', pokemonController);
router.use('/pokemons', pokemonController);
router.use('/elements', elementsController);

module.exports = router;