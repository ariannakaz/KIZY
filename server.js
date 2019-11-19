// Require Express and Body Parser support.
const express = require("express");
const bodyParser = require("body-parser");

// Create a new top-level Router and add the body parser middleware.
// Note, we are using body parser support to parse JSON that is being
// sent from the client. This will automatically parse JSON and assign
// a corresponding JavaScript object to the Request object's `body`
// property.
const router = express.Router();

// This will allow the router to parse both json and form data.
router.use(bodyParser.json());

// This will use the static middleware
router.use(express.static('public'));

// Mount our API router to the main router with the `/api/songs` prefix.
//router.use('/api/songs', require('./api/songs'));

// Add redirects to html files.
router.get('/', (req, res) => {
  res.redirect('/shell.html');
});

// Create out express application and add our main router.
const app = express();
app.use(router);

// Listen on port 3000.
app.listen(3000, () => {
  console.log('Serving running on port 3000');
});