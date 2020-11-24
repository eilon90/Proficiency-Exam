const express = require('express');
const urllib = require('urllib');
const router = express.Router();


router.get('/recipes/:ingredient', function(req, res) {
    const ingredient = req.params.ingredient;
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response) {
        res.send(response);
    })
})

module.exports = router;