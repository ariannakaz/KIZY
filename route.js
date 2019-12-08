const router = require("express").Router();
const exerciseModel = require('./models/exerciseModel.js');


router.get('/', (req, res) => {
    res.redirect('./shellSurvey.html');
  });

router.get("/exer", (req, res) => {
  exerciseModel.find((err, exercises) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.json(exercises);
      }
  });
});

router.get("/search", (req, res) => {
    let query = {};
    // Check if genre was supplied in query string
    if (req.query.category) {
        query = { category: [ req.query.category ] };
    }

    exerciseModel.find(query, (err, exercises) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(exercises);
        }
    });
});

module.exports = router