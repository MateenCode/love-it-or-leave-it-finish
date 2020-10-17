const express = require('express');
const router = express.Router()


router.get('/animals', (req, res)=>{
    res.render('loveit/animals.ejs', {animals:['sand crab', 'corny joke dog']})
})

router.get('/foods', (req, res)=>{
    res.render('loveit/foods.ejs', {foods:['cashew cheese', 'hemp milk']})
})

module.exports = router;