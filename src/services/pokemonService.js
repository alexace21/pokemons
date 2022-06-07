const path = require('path');

const { Pokemon } = require('../models/Pokemon')
const Element = require('../models/Element');

exports.getAll = () => {
    let pokemons = Pokemon.find().lean();

    return pokemons;
};

exports.getOne = (pokemonId) => Pokemon.findById(pokemonId).populate('elements').lean();

exports.create = (pokemon) => Pokemon.create(pokemon);

exports.attachElement = async (pokemonId, elementId) => {
    const pokemon = await Pokemon.findById(pokemonId);
    const element = await Element.findById(elementId);

    pokemon.elements.push(element);
    element.pokemons.push(pokemon);

    await pokemon.save();
    await element.save();

    return pokemon;
}


