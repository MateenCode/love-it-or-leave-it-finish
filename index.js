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

const loveIt = require('./controllers/loveit');
const leaveIt = require('./controllers/leaveit')

app.use('/loveit', loveIt)
app.use('/leaveit', leaveIt)


app.listen(8000, ()=>{
    console.log("layoutssssss at 8000")
})