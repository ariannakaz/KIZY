// require express, mongoose, middleware, routes
var express = require('express');
var app = express();

const router = express.Router();

// This will allow the router to parse both json and form data.
router.use(bodyParser.json());

// This will use the static middleware
router.use(express.static('public'));

// Mount our API router to the main router with the `/api/songs` prefix.
router.use('/api/exercise', require('./api/exercise'));

// Add redirects to html files.
router.get('/', (req, res) => {
  res.redirect('/XXX.html');
});

// Create out express application and add our main router.
const app = express();
app.use(router);

// Listen on port 3000.
app.listen(3000, () => {
  console.log('Serving running on port 3000');
});


// export app
module.exports = app;
