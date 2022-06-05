const router = require('express').Router();
const { Pokemon } = require('../models/Pokemon');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/pokemons', async (req, res) => {
    const pokemons = await Pokemon.find().lean(); // cursor: use lean

    console.log(pokemons);

    res.render('pokemons', { pokemons });
});

module.exports = router;