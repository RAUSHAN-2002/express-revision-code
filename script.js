const express = require('express')
const app = express()



app.set("view engine","ejs");

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
    res.send('This is profile pages')
  })
app.get('/profile/:username', function (req, res) {
    res.send(`Hello ${req.params.username}`)
  })

app.get('/Home',function(req,res){
    res.render("Home")
})


app.get('/contact',function(req,res){
    res.render("Contact")
})
  

app.listen(3000)