const router = require('express').Router();

const pokemonService = require('../services/pokemonService');

router.get('/', async (req, res) => {
    const pokemons = await pokemonService.getAll();

    res.render('home', { pokemons });
});

router.get('/pokemons/details/:pokemonId', async (req, res) => {
    let pokemon = await pokemonService.getOne({ _id: req.params.pokemonId });

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
    let savedPokemon = await pokemonService.create(req.body);
    console.log(savedPokemon);

    res.redirect('/');
})

router.get('/:pokemonId/attach-element', async (req, res) => {
    const pokemon = await pokemonService.getOne(req.params.pokemonId);

    res.render('elements/attach', { pokemon });
});



module.exports = router;