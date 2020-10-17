const express = require('express')
const app = express()
// import express ejs layouts and call it ejsLayouts
const ejsLayouts = require('express-ejs-layouts')

//middleware section
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.use('/loveit', require('./controllers/loveit'))


app.get('/leaveit/movies', (req, res)=>{
    res.render('movies.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

app.get('/leaveit/products', (req, res)=>{
    res.render('products.ejs', {products:['squatty potty', 'bacon soda']})
})

app.listen(8000, ()=>{
    console.log("layoutssssss at 8000")
})