const router = require("express").Router();
const exerciseModel = require('./models/exerciseModel.js');


router.get("/exer", (req, res) => {
  exerciseModel.find((err, exercises) => {
      if (err) {
          res.status(400).send(err);
      } else {
          res.json(exercises);
      }
  });
});

module.exports = router