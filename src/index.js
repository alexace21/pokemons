const express = require('express');

const { initializeDatabase } = require('./config/database');

const app = express();

require('./config/handlebars')(app);

initializeDatabase()
    .then(() => {
        app.listen(5000, () => {
            console.log('Application is listening on port 5000...');
            console.log('Database connected successfully.');

        });
    })
    .catch((err) => {
        console.log('Cannot connect to Database: ' + err);
    });

