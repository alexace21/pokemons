const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/PokemonSuggester';

exports.initializeDatabase = () => mongoose.connect(url);