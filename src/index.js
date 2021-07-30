const path = require('path');
const express = require('express');
const app = express();
const port = 8000;
const hbs = require('hbs');

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

//to set the view engine
app.set('view engine', 'hbs');

//change views directory to custom directory here is 'templates'
app.set('views', templatePath);

//register partials from hbs
hbs.registerPartials(partialPath);

//built-in middleware
//app.use(express.static(staticPath));

//template engine route and we also send dynamic content in 2nd argument of render.Whenever we are working on template engines we must use res.render() method.
app.get('', (req, res) => {
  res.render('index', {
    newName: 'Hello its Dynamic Data here !',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/', (req, res) => {
  res.send('Home Page!');
});
app.get('/about', (req, res) => {
  res.send('About Page!');
});

app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: '404 Page Not Found',
  });
});

app.listen(port, () => {
  console.log(`Listening to the PORT ${port}`);
});

//The callback function has 2 Parameters, (request(req) and response(res))

//The Request(req) Object represents the HTTP request and has properties for the request query string, parameters ,body , HTTP headers etc.

//Similarly , the response object represents the HTTP response that the Express app sends when it receives an HTTP request.
