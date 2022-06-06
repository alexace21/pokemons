const router = require('express').Router();
const { Pokemon } = require('../models/Pokemon');

const pokemonService = require('../services/pokemonService');

router.get('/', async (req, res) => {
    const pokemons = await Pokemon.find().lean();

    res.render('home', { pokemons });
});

router.get('/pokemons', async (req, res) => {
    const pokemons = await Pokemon.find().lean(); // cursor: use lean

    console.log(pokemons);

    res.render('pokemons', { pokemons });
});

router.get('/:pokemonId', async (req, res) => {
    let pokemon = await Pokemon.findById({ _id: req.params.pokemonId }).lean();

    res.render('pokemonDetails', { pokemon });
})

router.get('/pokemons/create', (req, res) => {

    res.render('createPokemon');
})

router.post('/pokemons/create', async (req, res) => {
    // First way to create DB document
    // const pokemon = new Pokemon(req.body);
    // let savedPokemon = await pokemon.save();

    // Second way to create DB document
    let savedPokemon = await Pokemon.create(req.body);
    console.log(savedPokemon);

    res.redirect('/pokemons');
})



module.exports = router;