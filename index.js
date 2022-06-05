const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const pokemonController = require('./controllers/pokemonController');

const app = express();
const url = 'mongodb://localhost:27017/PokemonSuggester';
mongoose.connect(url)
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((err) => {
        console.log("DB error: " + err);
    })


app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use('/', pokemonController);
app.use('/pokemons', pokemonController);

app.listen(5000, () => console.log('Application is listening on port 5000...'));