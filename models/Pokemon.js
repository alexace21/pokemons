const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pokemon title is required!'],
        minlength: 2,
    },
    imageUrl: String,
    description: {
        type: String,
        required: [true, 'Pokemon description is required!'],
        maxlength: 120
    },
    power: {
        type: Number,
        required: [true, 'Pokemon power is required!'],
    }
});

pokemonSchema.path('name').validate(function() {
    return this.name >= 2 && this.name <= 10;
}, 'Invalid pokemon title!')

pokemonSchema.path('description').validate(function() {
    return this.description <= 10;
}, 'Invalid pokemon description!')

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

exports.Pokemon = Pokemon;