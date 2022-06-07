const router = require('express').Router();
const elementService = require('../services/elementService');

router.get('/create', (req, res) => {

    res.render('elements/create');

});

router.post('/create', async (req, res) => {

const savedElement = await elementService.create(req.body);

console.log(savedElement);

res.redirect('/');

});

module.exports = router;