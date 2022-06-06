const handlebars = require('express-handlebars');
const express = require('express');
const routes = require('../routes');

module.exports = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');
    app.set('views', './src/views');

    app.use('/static', express.static('public'));
    app.use(express.urlencoded({ extended: false }));

    app.use(routes);
}