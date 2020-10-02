const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(routes);

app.set('view engine', 'njk');

nunjucks.configure('src/views', {
  express: app,
  autoescape: true,
  noCache: true,
});



app.listen(8080, () => {
  console.log('Wonder Path App is running!');
});