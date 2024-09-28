const express = require('express');
const urllib = require('urllib');
const router = express.Router();


router.get('/recipes/:ingredient', function(req, res) {
    const ingredient = req.params.ingredient;
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response) {
        const result = JSON.parse(response).results;
        const fixedData = result.map(r => {return {
            ingredients: r.ingredients,
            title: r.title,
            thumbnail: r.thumbnail,
            href: r.href
        }});
        res.send(fixedData);
    })
})

module.exports = router;