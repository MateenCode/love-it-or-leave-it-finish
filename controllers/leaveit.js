const express = require('express');
const router = express.Router()


router.get('/movies', (req, res)=>{
    res.render('leaveit/movies.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/products', (req, res)=>{
    res.render('leaveit/products.ejs', {products:['squatty potty', 'bacon soda']})
})

module.exports = router;