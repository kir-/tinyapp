const express = require('express');
const app = express();
const PORT = 8080;

app.set("view engine", 'ejs');

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get('/',(req,res) => {
  res.send('Hello');
});

app.get('/urls.json', (req,res) => {
  res.json(urlDatabase);
});

app.get('/urls', (req,res) => {
  let templateVars = {urls: urlDatabase};
  res.render('urls_index', templateVars);
});

app.get("/urls/:shortURL", (req, res)=>{
  let templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL]};
  res.render('urls_show', templateVars);
});

app.get('/hello', (req,res)=>{
  res.send("<html><body>Hello <b>World</b></html></body>\n");
});

app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`);
});