const path = require('path');

const { Pokemon } = require('../models/Pokemon')

exports.getAll = () => {
    let pokemons = Pokemon.find().lean();

    return pokemons;
};

exports.getOne = (pokemonId) => Pokemon.findById(pokemonId).lean();

exports.create = (pokemon) => Pokemon.create(pokemon);

