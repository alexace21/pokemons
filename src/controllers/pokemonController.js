const router = require('express').Router();

const pokemonService = require('../services/pokemonService');
const elementService = require('../services/elementService');

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
    const elements = await elementService.getAll();

    res.render('elements/attach', { pokemon, elements });
});

router.post('/:pokemonId/attach-element', async (req, res) => {
    const elementId = req.body.element;

    await pokemonService.attachElement(req.params.pokemonId, elementId);

    res.redirect(`/pokemons/details/${req.params.pokemonId}`);
});


module.exports = router;