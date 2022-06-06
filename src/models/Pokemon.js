const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pokemon title is required!'],
        minlength: 2,
    },
    imageUrl: {
        type: String,
        required: [true, 'Pokemon imageUrl is required!']
    },
    description: {
        type: String,
        required: [true, 'Pokemon description is required!'],
        maxlength: 120
    },
    power: {
        type: Number,
        required: [true, 'Pokemon power is required!'],
        min: 1,
        max: 6
    }
});

pokemonSchema.path('imageUrl').validate(function() {
    return this.imageUrl.startsWith('http');
}, 'Invalid pokemon imageUrl!')

//pokemonSchema.path('description').validate(function() {
//    return this.description <= 10;
//}, 'Invalid pokemon description!')

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

exports.Pokemon = Pokemon;