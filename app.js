const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

// Database Connection
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Template Engine Configuration
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts: posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/addPost', (req, res) => {
  res.render('add_post');
});

app.get('/posts/:id', async (req, res) =>{
  //console.log(req.params.id);
  const post = await Post.findById(req.params.id);
  console.log(post)
  res.render('post', { post: post });
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portu üzerinde çalışıyor.`);
});
