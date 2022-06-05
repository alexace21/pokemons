const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    difficultyLevel: Number
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

exports.Pokemon = Pokemon;