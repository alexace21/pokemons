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
        maxlength: 200
    },
    power: {
        type: Number,
        required: [true, 'Pokemon power is required!'],
        min: 1,
        max: 100
    },
    height: {
        type: String,
        required: [true, 'Pokemon height is required!'],
        minlength: 2,
    },
    weight: {
        type: String,
        required: [true, 'Pokemon weight is required!'],
        minlength: 2,
    },
    category: {
        type: String,
        required: [true, 'Pokemon category is required!'],
        minlength: 3,
    },
    type: {
        type: String,
        required: [true, 'Pokemon type is required!'],
        minlength: 3,
    },
    elements: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Element'
        }
    ]
});

pokemonSchema.path('imageUrl').validate(function() {
    return this.imageUrl.startsWith('http');
}, 'Invalid pokemon imageUrl!')

//pokemonSchema.path('description').validate(function() {
//    return this.description <= 10;
//}, 'Invalid pokemon description!')

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

exports.Pokemon = Pokemon;