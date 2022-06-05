const express = require('express');
const handlebars = require('express-handlebars');
const { MongoClient } = require('mongodb');

const app = express();
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect()
    .then(() => {
        console.log('Database connected successfully.');
    });

const database = client.db('PokemonSuggester');
const pokemonCollection = database.collection('pokemons');

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/pokemons', async (req, res) => {
    let pokemons = await pokemonCollection.find().toArray();

    //res.json(pokemons);
    res.render('pokemons', { pokemons });
});

app.listen(5000, () => console.log('Application is listening on port 5000...'));