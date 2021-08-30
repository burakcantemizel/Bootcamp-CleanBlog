const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();

// Template Engine Configuration
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/addPost', (req, res) => {
  res.render('add_post')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portu üzerinde çalışıyor.`);
});
