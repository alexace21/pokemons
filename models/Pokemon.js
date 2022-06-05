const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: String,
    description: {
        type: String,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

exports.Pokemon = Pokemon;